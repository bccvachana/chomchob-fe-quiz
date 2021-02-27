import { TNotReturnFunction } from 'types/common';
import { IProductDetail } from 'types/product';

export interface IUseProductDetailReturns {
  productDetail: IProductDetail | null | undefined;
  quantity: number;
  increaseQuantity: TNotReturnFunction;
  decreaseQuantity: TNotReturnFunction;
  addProductToCart: TNotReturnFunction;
}
