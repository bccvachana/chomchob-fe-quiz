/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { mapWithIndex } from 'utils/common';
import FullStarIcon from 'assets/images/full-star-icon.svg';
import HalfStarIcon from 'assets/images/half-star-icon.svg';
import BlankStarIcon from 'assets/images/blank-star-icon.svg';
import styles from './StarRating.module.scss';

interface IStarRatingProps {
  rating?: number;
  containerClassName?: string;
  starClassName?: string;
}

const StarRating: FC<IStarRatingProps> = ({
  rating = 0,
  containerClassName,
  starClassName,
}) => (
  <div
    className={`${styles.container} ${containerClassName || ''}`}
  >
    {mapWithIndex(
      (_: any, index: any) => {
        const computedIndexRating = rating - index;
        if (computedIndexRating > 0.5) {
          return (
            <img
              className={`${styles.star} ${starClassName || ''}`}
              src={FullStarIcon}
              alt="full-star-icon"
              key={index}
            />
          );
        }
        if (computedIndexRating === 0.5) {
          return (
            <img
              className={`${styles.star} ${starClassName || ''}`}
              src={HalfStarIcon}
              alt="half-star-icon"
              key={index}
            />
          );
        }
        return (
          <img
            className={`${styles.star} ${starClassName || ''}`}
            src={BlankStarIcon}
            alt="blank-star-icon"
            key={index}
          />
        );
      },
      [...Array(5)],
    )}
  </div>
);

export default StarRating;
