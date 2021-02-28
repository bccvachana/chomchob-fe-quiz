/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCartStore } from 'hooks';
import {
  isEmpty,
  keyBy, map, reduce, toNumber,
} from 'lodash/fp';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { clearCart } from 'store/cart/func';
import { ICartItem } from 'store/cart/types';
import { TNotReturnFunction } from 'types/common';
import { IProductDetail } from 'types/product';
import { axiosInstance } from 'utils/axios';
import { ISummary, IUseCartReturns } from './CartTypes';

export const useCart = (): IUseCartReturns => {
  const { push } = useHistory();
  const { cart } = useCartStore();

  const [productsDetail, setProductsDetail] = useState<{
    [key: string]: IProductDetail;
  }>({});
  const [summary, setSummary] = useState<ISummary>({
    productTotal: 0,
    priceTotal: '0.00',
  });

  useEffect(() => {
    (async () => {
      const fetchProductDetail = async (productId: string): Promise<IProductDetail> => {
        const { data } = await axiosInstance.get(
          `/product/${productId}`,
        );
        return data;
      };
      const fetchPromise: Promise<IProductDetail>[] = map(
        ({ productId }: ICartItem) => fetchProductDetail(productId), cart,
      );
      const result = await Promise.all(fetchPromise);
      setProductsDetail(
        keyBy('_id', result),
      );
    })();
  }, [cart]);

  useEffect(() => {
    if (!isEmpty(productsDetail)) {
      setSummary({
        productTotal: cart.length,
        priceTotal: reduce((
          result: number,
          { productId, productQuantity }: ICartItem,
        ) => {
          result += (toNumber(productsDetail[productId].price) * productQuantity);
          return result;
        }, 0, cart).toFixed(2),
      });
    }
  }, [productsDetail]);

  const checkout: TNotReturnFunction = () => {
    clearCart();
    push('/product');
    // NOTE: mock checkout process (clearCart + push to '/product')
  };

  return {
    productsDetail,
    summary,
    checkout,
  };
};
