import { combineReducers, createStore } from 'redux';
import { IProductStore } from './product/types';
import { productReducer } from './product/reducer';

export interface IRootStore {
  product: IProductStore;
}

const store = createStore<IRootStore, any, any, any>(
  combineReducers({
    product: productReducer,
  }),
);

export default store;
