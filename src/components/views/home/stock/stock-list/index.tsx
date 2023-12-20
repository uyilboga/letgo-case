import React from 'react';
import { useAppSelector } from '@/store/hooks';
import styles from './StockList.module.scss';
import Empty from '@/components/common/empty';
import Skeleton from 'react-loading-skeleton';
import SymbolTableItem from '@/components/common/symbol-table-item';

const StockList = () => {
  const { stock } = useAppSelector((state) => state.stock);
  const { loading } = useAppSelector((state) => state.symbols);

  return (
    <div className={styles.stockList}>
      {loading ? (
        <Skeleton count={stock.length} height={65} />
      ) : (
        <>
          {stock.length === 0 && <Empty text="your portfolio is empty!" />}
          {stock.map((item, index) => (
            <div className={styles.item} key={index}>
              <SymbolTableItem type="stock" data={item.data} stockQuantity={item.quantity} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default StockList;
