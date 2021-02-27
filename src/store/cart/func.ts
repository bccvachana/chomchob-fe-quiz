import store from 'store';
import {
  addCartItemAction,
  clearCartAction,
} from './actions';
import { ICartItem } from './types';

export const addCartItem = (
  cartItem: ICartItem,
) => store.dispatch(addCartItemAction(cartItem));

export const clearCart = () => store.dispatch(clearCartAction());
