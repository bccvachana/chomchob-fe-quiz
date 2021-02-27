import { ActionType } from 'typesafe-actions';
import { find, remove } from 'lodash/fp';
import { ICartItem, ICartStore } from './types';
import * as actions from './actions';
import { ACTIONS_CONSTANT } from './constants';

export type TCartActions = ActionType<typeof actions>;

const localStorageCartState = localStorage.getItem('cart');
const emptyCartState = {
  cart: [],
  quantity: 0,
};

const initState: ICartStore = localStorageCartState
  ? JSON.parse(localStorageCartState) : emptyCartState;

export const cartReducer = (
  state: ICartStore = initState,
  action: TCartActions,
): ICartStore => {
  switch (action.type) {
    case ACTIONS_CONSTANT.ADD_CART_ITEM: {
      let cartItem: ICartItem;
      const { productId, productQuantity } = action.payload as ICartItem;
      const existedProduct = find(
        ({ productId: id }: ICartItem) => id === productId, state.cart,
      );
      if (existedProduct) {
        state.cart = remove(
          ({ productId: id }: ICartItem) => id === productId, state.cart,
        );
        cartItem = {
          productId,
          productQuantity: existedProduct.productQuantity + productQuantity,
        };
      } else cartItem = action.payload as ICartItem;
      const newState = {
        cart: [cartItem, ...state.cart],
        quantity: state.quantity + productQuantity,
      };
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }

    case ACTIONS_CONSTANT.CLEAR_CART: {
      localStorage.setItem('cart', JSON.stringify(emptyCartState));
      return emptyCartState;
    }

    default:
      return state;
  }
};
