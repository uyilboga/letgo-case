import React from 'react';
import styles from './Empty.module.scss';
import { EmptyTypes } from '@/components/common/empty/Empty.types';

const Empty = (props: EmptyTypes) => {
  const { text, image = '/img/empty.png' } = props;
  return (
    <div className={styles.empty}>
      <img src={image} alt="Empty" />
      <h4>{text}</h4>
    </div>
  );
};

export default Empty;
