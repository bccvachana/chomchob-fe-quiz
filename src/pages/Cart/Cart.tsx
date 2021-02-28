import { FC } from 'react';
import { useCartStore } from 'hooks';
import { PageContainer, ImgContainer } from 'components';
import {
  isEmpty, map, toNumber,
} from 'lodash/fp';
import { ICartItem } from 'store/cart/types';
import styles from './Cart.module.scss';
import { useCart } from './CartHooks';

const Cart: FC = () => {
  const { cart } = useCartStore();
  const { productsDetail, summary, checkout } = useCart();

  return (
    <PageContainer
      bodyClassName={styles.body}
    >
      <div className={styles.title}>Cart</div>

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.header}`}>
          <div className={styles.productName}>PRODUCT NAME</div>
          <div className={styles.price}>PRICE</div>
          <div className={styles.quantity}>QUANTITY</div>
          <div className={styles.total}>TOTAL</div>
        </div>

        {map(({ productId, productQuantity }: ICartItem) => (
          <div className={`${styles.row} ${styles.data}`} key={productId}>
            {!isEmpty(productsDetail) && (
              <>
                <div className={styles.productName}>
                  <ImgContainer
                    src={productsDetail[productId].image_url}
                    className={styles.productImg}
                  />
                  {productsDetail[productId].name}
                </div>
                <div className={styles.price}>{`฿${productsDetail[productId].price}`}</div>
                <div className={styles.quantity}>{productQuantity}</div>
                <div className={styles.total}>
                  {`฿${(toNumber(productsDetail[productId].price) * productQuantity).toFixed(2)}`}
                </div>
              </>
            )}
          </div>
        ), cart)}
      </div>

      <div className={styles.summary}>
        <div className={styles.subtotal}>
          {`Subtotal (${summary.productTotal} Product):`}
          <div className={styles.totalPrice}>
            {`฿${summary.priceTotal}`}
          </div>
        </div>
        <button
          type="button"
          onClick={checkout}
          className={styles.checkOutButton}
        >
          PROCEED TO CHECK OUT
        </button>
      </div>
    </PageContainer>
  );
};

export default Cart;
