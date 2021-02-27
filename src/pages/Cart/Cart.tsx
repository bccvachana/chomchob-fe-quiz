/* eslint-disable @typescript-eslint/no-unused-vars */

import { FC } from 'react';
import { useCart } from 'hooks';
import { PageContainer } from 'components';

const Cart: FC = () => {
  const { cart } = useCart();

  return (
    <PageContainer>
      Cart
    </PageContainer>
  );
};

export default Cart;
