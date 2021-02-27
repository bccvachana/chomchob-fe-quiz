import store from 'store';
import { ICommonObject } from 'types/common';
import {
  setProductListAction,
  setProductDetailAction,
} from './actions';

export const setProductList = (
  productList: ICommonObject[],
) => store.dispatch(setProductListAction(productList));

export const setProductDetail = (
  productDetail: ICommonObject,
) => store.dispatch(setProductDetailAction(productDetail));
