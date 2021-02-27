import { FC } from 'react';
import { PageContainer } from 'components';
import { map } from 'lodash/fp';
import { IProductDetail } from 'types/product';
import { Link } from 'react-router-dom';
import StarIcon from 'assets/images/star-icon.svg';
import BlankStarIcon from 'assets/images/blank-star-icon.svg';
import { mapWithIndex } from 'utils/common';
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
          >
            <div
              className={styles.productImg}
              style={{
                backgroundImage: `url(${image_url})`,
              }}
            />
            <div className={styles.productDetail}>
              <div
                className={styles.brandImg}
                style={{
                  backgroundImage: `url(${brand_image_url})`,
                }}
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
                    <div className={styles.rating}>
                      {mapWithIndex(
                        (_: any, index: any) => (
                          index < rating
                            ? (
                              <img
                                className={styles.star}
                                src={StarIcon}
                                alt="star-icon"
                              />
                            ) : (
                              <img
                                className={styles.star}
                                src={BlankStarIcon}
                                alt="blank-star-icon"
                              />
                            )
                        ),
                        [...Array(5)],
                      )}

                    </div>
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
