import { FC } from 'react';
import styles from './ImgContainer.module.scss';

interface IImgContainerProps {
  src: string;
  className?: string;
}

const ImgContainer: FC<IImgContainerProps> = ({
  src,
  className,
}) => (
  <div
    className={`${styles.imgContainer} ${className || ''}`}
    style={{
      backgroundImage: `url(${src})`,
    }}
  />
);

export default ImgContainer;
