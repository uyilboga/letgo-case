import React from 'react';
import { NumberInputTypes } from '@/components/common/number-input/NumberInput.types';
import styles from './NumberInput.module.scss';

const NumberInput = (props: NumberInputTypes) => {
  const { name, value, onChange } = props;
  return <input name={name} type="number" min={0} className={styles.numberInput} value={value} onChange={onChange} />;
};

export default NumberInput;
