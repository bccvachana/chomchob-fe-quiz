import { ICommonObject } from 'types/common';
import { action } from 'typesafe-actions';
import { ACTIONS_CONSTANT } from './constants';

export const setProductListAction = (
  productList: ICommonObject[],
) => action(ACTIONS_CONSTANT.SET_PRODUCT_LIST, productList);

export const setProductDetailAction = (
  productDetail: ICommonObject,
) => action(ACTIONS_CONSTANT.SET_PRODUCT_DETAIL, productDetail);
