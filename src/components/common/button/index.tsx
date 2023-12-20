import React from 'react';
import { ButtonProps } from '@/components/common/button/Button.types';
import styles from './Button.module.scss';

const Button = (props: ButtonProps) => {
  const { variant = 'primary', onClick, children } = props;

  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
