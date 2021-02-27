import { FC } from 'react';
import { PageContainer, ImgContainer, StarRating } from 'components';
import { map } from 'lodash/fp';
import { IProductDetail } from 'types/product';
import { Link } from 'react-router-dom';
import { useProductList } from './ProductListHooks';
import styles from './ProductList.module.scss';

const ProductList: FC = () => {
  const { productList } = useProductList();

  return (
    <PageContainer>
      <div className={styles.title}>
        {`Products (${productList.length})`}
      </div>
      <div className={styles.productList}>
        {map(({
          _id,
          brand_info: { url: brand_image_url },
          image_url,
          name,
          price,
          review: { number, rating },
        }: IProductDetail) => (
          <Link
            to={`/product/${_id}`}
            className={styles.product}
            key={_id}
          >
            <ImgContainer
              src={image_url}
              className={styles.productImg}
            />
            <div className={styles.productDetail}>
              <ImgContainer
                src={brand_image_url}
                className={styles.brandImg}
              />

              <div className={styles.detail}>
                <div className={styles.name}>{name}</div>
                <div className={styles.priceReview}>
                  <div>
                    Price
                    <div className={styles.price}>{`฿${price}`}</div>
                  </div>
                  <div>
                    {`Reviews (${number} reviews)`}
                    <StarRating rating={rating} containerClassName={styles.rating} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ), productList)}
      </div>
    </PageContainer>
  );
};

export default ProductList;
