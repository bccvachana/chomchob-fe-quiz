import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from 'components';
import Logo from 'assets/images/logo.svg';
import CartIcon from 'assets/images/cart-icon.svg';
import { map } from 'lodash/fp';
import { useCartStore } from 'hooks';
import styles from './Navbar.module.scss';

const links = [
  'Home',
  'New Products',
  'Women',
  'Men',
  'Kid',
  'Accessories',
];

const Navbar: FC = () => {
  const { quantity } = useCartStore();
  return (
    <PageContainer
      containerClassName={styles.container}
      bodyClassName={styles.body}
    >
      <Link to="/product">
        <img
          className={styles.logo}
          src={Logo}
          alt="logo"
        />
      </Link>
      <div className={styles.link}>
        {map((link) => (
          <Link to="/product" key={link}>
            {link}
          </Link>
        ), links)}
      </div>
      <Link
        to="/cart"
        className={styles.cart}
      >
        <div className={styles.iconBadge}>
          <img
            className={styles.icon}
            src={CartIcon}
            alt="cart-icon"
          />
          <div className={styles.badge}>{quantity}</div>
        </div>
        Cart
      </Link>
    </PageContainer>
  );
};

export default Navbar;
