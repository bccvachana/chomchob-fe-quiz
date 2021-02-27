import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProductDetail } from 'types/product';
import { axiosInstance } from 'utils/axios';
import { IUseProductDetailReturns } from './ProductDetailTypes';

export const useProductDetail = (): IUseProductDetailReturns => {
  const { productId }: { productId: string; } = useParams();
  const [productDetail, setProductDetail] = useState<IProductDetail | null | undefined>(undefined);

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

  return {
    productDetail,
  };
};
