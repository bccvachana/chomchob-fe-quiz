import { useEffect, useState } from 'react';
import { IProductDetail } from 'types/product';
import { axiosInstance } from 'utils/axios';
import { IUseProductListReturns } from './ProductListTypes';

export const useProductList = (): IUseProductListReturns => {
  const [productList, setProductList] = useState<IProductDetail[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axiosInstance.get(
        '/product',
      );
      setProductList(data);
    })();
  }, []);

  return {
    productList,
  };
};
