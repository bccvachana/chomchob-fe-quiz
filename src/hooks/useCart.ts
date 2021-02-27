import { useSelector } from 'react-redux';
import { IRootStore } from 'store';
import { ICartStore } from 'store/cart/types';

const useCart = (): ICartStore => useSelector((state: IRootStore) => state.cart);

export default useCart;
