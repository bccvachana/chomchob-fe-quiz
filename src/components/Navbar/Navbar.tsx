import { FC } from 'react';
import { PageContainer } from 'components';
import LogoSvg from 'assets/images/logo.svg';
import { map } from 'lodash/fp';
import styles from './Navbar.module.scss';

const links = [
  'Home',
  'New Products',
  'Women',
  'Men',
  'Kid',
  'Accessories',
];

const Navbar: FC = () => (
  <PageContainer
    containerClassName={styles.container}
    bodyClassName={styles.body}
  >
    <div>
      <img
        className={styles.logo}
        src={LogoSvg}
        alt="logo"
      />
    </div>
    <div className={styles.linkContainer}>
      {map((link) => (
        <a href="/">
          {link}
        </a>
      ), links)}
    </div>
    <div className={styles.cartContainer}>
      Cart
    </div>
  </PageContainer>
);

export default Navbar;
