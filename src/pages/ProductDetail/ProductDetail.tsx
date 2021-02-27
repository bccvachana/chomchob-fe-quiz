import { FC } from 'react';
import { PageContainer, ImgContainer, StarRating } from 'components';
import {
  isNull, isUndefined, toNumber,
} from 'lodash/fp';
import AddCartIcon from 'assets/images/add-cart-icon.svg';
import { useProductDetail } from './ProductDetailHooks';
import styles from './ProductDetail.module.scss';

const ProductDetail: FC = () => {
  const {
    productDetail,
    quantity,
    increaseQuantity,
    decreaseQuantity,
    addProductToCart,
  } = useProductDetail();

  return !isUndefined(productDetail) ? (
    <PageContainer
      bodyClassName={styles.body}
    >
      {!isNull(productDetail) ? (
        <>
          <ImgContainer
            src={productDetail.image_url}
            className={styles.img}
          />

          <div className={styles.detail}>
            <div className={styles.name}>
              {productDetail.name}
            </div>

            <div className={styles.review}>
              <StarRating
                rating={productDetail.review.rating}
                containerClassName={styles.rating}
                starClassName={styles.star}
              />
              {`(${productDetail.review.number}  reviews)`}
            </div>

            <div className={styles.description}>
              {productDetail.description}
            </div>

            <div className={styles.price}>
              <div className={styles.title}>Price</div>
              <div className={styles.container}>
                <div className={styles.discountPrice}>
                  {`฿ ${productDetail.price}`}
                </div>
                <div className={styles.notDiscountPrice}>
                  {
                    `฿${(toNumber(productDetail.price) + 500).toFixed(2)}`
                    // NOTE: This is mock not-discount price (+ ฿500)
                  }
                </div>
              </div>
            </div>

            <div className={styles.quantity}>
              Quantity:
              <div className={styles.counter}>
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className={styles.icon}
                >
                  -
                </button>
                <div
                  className={styles.value}
                >
                  {quantity}

                </div>
                <button
                  type="button"
                  onClick={increaseQuantity}
                  className={styles.icon}
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={addProductToCart}
              className={styles.addButton}
            >
              <img
                className={styles.icon}
                src={AddCartIcon}
                alt="add-cart-icon"
              />
              ADD TO CART
            </button>
          </div>
        </>
      ) : 'Product not found'}
    </PageContainer>
  ) : null;
};

export default ProductDetail;
