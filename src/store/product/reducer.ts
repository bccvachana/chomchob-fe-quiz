import { ActionType } from 'typesafe-actions';
import store from 'store';
import { IProductStore } from './types';
import * as actions from './actions';
import { ACTIONS_CONSTANT } from './constants';

export type TProductActions = ActionType<typeof actions>;

const initState: IProductStore = {
  productList: [],
  productDetail: {},
};

export const productReducer = (
  state: IProductStore = initState,
  action: TProductActions,
): IProductStore => {
  switch (action.type) {
    case ACTIONS_CONSTANT.SET_PRODUCT_LIST:
      return {
        ...store,
        productList: action.payload,
      };
    case ACTIONS_CONSTANT.SET_PRODUCT_DETAIL:
      return {
        ...store,
        productDetail: action.payload,
      };
    default:
      return state;
  }
};
