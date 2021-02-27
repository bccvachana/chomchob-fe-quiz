import { TNotReturnFunction } from 'types/common';
import { IProductDetail } from 'types/product';

export interface ISummary {
  productTotal: number;
  priceTotal: string;
}

export interface IUseCartReturns {
  productsDetail: {
    [key: string]: IProductDetail;
  };
  summary: ISummary;
  checkout: TNotReturnFunction;
}
