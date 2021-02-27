import { ActionType } from 'typesafe-actions';
import { ICartStore } from './types';
import * as actions from './actions';
import { ACTIONS_CONSTANT } from './constants';

export type TCartActions = ActionType<typeof actions>;

const initState: ICartStore = {
  cart: [],
  quantity: 0,
};

export const cartReducer = (
  state: ICartStore = initState,
  action: TCartActions,
): ICartStore => {
  switch (action.type) {
    case ACTIONS_CONSTANT.ADD_CART_ITEM:
      return state;
    case ACTIONS_CONSTANT.CLEAR_CART:
      return initState;
    default:
      return state;
  }
};
