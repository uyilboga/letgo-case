import React, { useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';
import styles from './SymbolList.module.scss';
import { SymbolListTypes } from '@/components/views/home/stock/symbol-list/SymbolList.types';
import { CloseButton } from 'react-bootstrap';
import Empty from '@/components/common/empty';
import Preloader from '@/components/common/preloader';
import SymbolTableItem from '@/components/common/symbol-table-item';
import { ISymbol } from '@/utils/types/symbols.types';

const SymbolList = (props: SymbolListTypes) => {
  const { setShow } = props;
  const { symbols, loading } = useAppSelector((state) => state.symbols);
  const [search, setSearch] = React.useState<string>('');
  const [filteredSymbols, setFilteredSymbols] = React.useState<ISymbol[]>([]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (search === '') {
        setFilteredSymbols(symbols);
      } else {
        const filtered = symbols.filter((item) => item.symbol.includes(search.toUpperCase()));
        setFilteredSymbols(filtered);
      }
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [search, symbols]);

  return (
    <div className={`${styles.symbolContent}`}>
      <div className={styles.symbolListHeader}>
        <span className={styles.name}>Symbol List</span>
        <span className={styles.close} onClick={() => setShow(false)}>
          <CloseButton />
        </span>
      </div>
      <div className={styles.symbolSearch}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
      </div>
      {loading ? (
        <Preloader />
      ) : (
        <div className={styles.symbolList}>
          {symbols?.length ? (
            filteredSymbols?.map((item, index) => (
              <div className={styles.item} key={index}>
                <SymbolTableItem type="symbol" data={item} />
              </div>
            ))
          ) : (
            <Empty text="Symbol data not found!" />
          )}
        </div>
      )}
    </div>
  );
};

export default SymbolList;
