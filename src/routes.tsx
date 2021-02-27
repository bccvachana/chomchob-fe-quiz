import { ProductList } from 'pages';

export const routes = [
  {
    path: '/product',
    PageComponent: ProductList,
  },
  {
    path: '/product/:productId',
    PageComponent: () => <div>/product/:productId</div>,
  },
  {
    path: '/cart',
    PageComponent: () => <div>/cart</div>,
  },
];
