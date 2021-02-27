import { FC } from 'react';
import { PageContainer } from 'components';
import styles from './Footer.module.scss';

const Footer: FC = () => (
  <PageContainer
    containerClassName={styles.container}
    bodyClassName={styles.body}
  >
    Copyright © 2021 ChomCHOB. All Rights Reserved.
  </PageContainer>
);

export default Footer;
