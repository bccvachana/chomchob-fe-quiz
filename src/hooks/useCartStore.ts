import { useSelector } from 'react-redux';
import { IRootStore } from 'store';
import { ICartStore } from 'store/cart/types';

const useCartStore = (): ICartStore => useSelector((state: IRootStore) => state.cart);

export default useCartStore;
