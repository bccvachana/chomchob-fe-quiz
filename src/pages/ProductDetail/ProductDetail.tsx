/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { PageContainer } from 'components';
import { isNull, isUndefined } from 'lodash/fp';
import styles from './ProductDetail.module.scss';
import { useProductDetail } from './ProductDetailHooks';

const ProductDetail: FC = () => {
  const { productDetail } = useProductDetail();

  return !isUndefined(productDetail) ? (
    <PageContainer
      bodyClassName={styles.body}
    >
      {!isNull(productDetail) ? (
        <>
          <div
            className={styles.productImg}
            style={{
              backgroundImage: `url(${productDetail.image_url})`,
            }}
          />
          ProductDetail
        </>
      ) : 'Product not found'}
    </PageContainer>
  ) : null;
};

export default ProductDetail;
