import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './Preloader.module.scss';
import { PreloaderTypes } from '@/components/common/preloader/Preloader.types';

const Preloader = (props: PreloaderTypes) => {
  const { variant = 'secondary', animation = 'border', size } = props;
  return (
    <div className={styles.preloader}>
      <Spinner animation={animation} variant={variant} size={size} />
    </div>
  );
};

export default Preloader;
