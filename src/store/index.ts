import { combineReducers, createStore } from 'redux';
import { ICartStore } from './cart/types';
import { cartReducer } from './cart/reducer';

export interface IRootStore {
  cart: ICartStore;
}

const stores = createStore<IRootStore, any, any, any>(
  combineReducers({
    cart: cartReducer,
  }),
);

export default stores;
