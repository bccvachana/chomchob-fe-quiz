import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addCartItem } from 'store/cart/func';
import { TNotReturnFunction } from 'types/common';
import { IProductDetail } from 'types/product';
import { axiosInstance } from 'utils/axios';
import { IUseProductDetailReturns } from './ProductDetailTypes';

export const useProductDetail = (): IUseProductDetailReturns => {
  const { productId }: { productId: string; } = useParams();

  const [productDetail, setProductDetail] = useState<IProductDetail | null | undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosInstance.get(
          `/product/${productId}`,
        );
        setProductDetail(data);
      } catch (err) {
        setProductDetail(null);
      }
    })();
  }, []);

  const increaseQuantity: TNotReturnFunction = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity: TNotReturnFunction = () => {
    setQuantity(quantity - 1);
  };

  const addProductToCart: TNotReturnFunction = () => {
    addCartItem({
      productId,
      productQuantity: quantity,
    });
    setQuantity(0);
  };

  return {
    productDetail,
    quantity,
    increaseQuantity,
    decreaseQuantity,
    addProductToCart,
  };
};
