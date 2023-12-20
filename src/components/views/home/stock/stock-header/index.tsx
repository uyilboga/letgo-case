import React from 'react';
import Button from '@/components/common/button';
import { StockHeaderTypes } from '@/components/views/home/stock/stock-header/StockHeader.types';
import styles from './StockHeader.module.scss';
import { useDispatch } from 'react-redux';
import { fetchSymbols } from '@/store/features/symbols/symbols.slice';
const StockHeader = (props: StockHeaderTypes) => {
  const dispatch = useDispatch();
  const { setShow } = props;
  const showSymbolModal = () => {
    setShow(true);
  };

  const fetchSymbolList = () => {
    dispatch(fetchSymbols());
  };
  const refresh = () => {
    fetchSymbolList();
  };

  return (
    <div className={styles.stockHeader}>
      <div className={styles.title}>
        <h3>Portfolio</h3>
      </div>

      <div className={styles.buttons}>
        <Button variant="primary" onClick={showSymbolModal}>
          Add / Update
        </Button>

        <Button variant="secondary" onClick={refresh}>
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default StockHeader;
