export interface ICartItem {
  productId: string;
  productQuantity: number;
}

export interface ICartStore {
  cart: ICartItem[];
  quantity: number;
}
