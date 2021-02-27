import { action } from 'typesafe-actions';
import { ACTIONS_CONSTANT } from './constants';
import { ICartItem } from './types';

export const addCartItemAction = (
  cartItem: ICartItem,
) => action(ACTIONS_CONSTANT.ADD_CART_ITEM, cartItem);

export const clearCartAction = () => action(ACTIONS_CONSTANT.CLEAR_CART, {});
