import {
  ProductList,
  ProductDetail,
} from 'pages';

export const routes = [
  {
    path: '/product',
    PageComponent: ProductList,
  },
  {
    path: '/product/:productId',
    PageComponent: ProductDetail,
  },
  {
    path: '/cart',
    PageComponent: () => <div>/cart</div>,
  },
];
