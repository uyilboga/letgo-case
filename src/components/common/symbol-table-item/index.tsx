import React, { useEffect } from 'react';
import styles from '@/components/common/symbol-table-item/SymbolTableItem.module.scss';
import NumberInput from '@/components/common/number-input';
import Button from '@/components/common/button';
import { toast } from 'react-toastify';
import useStock from '@/utils/hooks/useStock';
import { useAppSelector } from '@/store/hooks';
import { SymbolItemTableTypes } from '@/components/common/symbol-table-item/SymbolItemTable.types';

const SymbolTableItem = (props: SymbolItemTableTypes) => {
  const { data, stockQuantity, type } = props;
  const [quantity, setQuantity] = React.useState<number>(1);
  const { updateSymbol, removeFromStock, addToStock } = useStock();
  const { stock } = useAppSelector((state) => state.stock);

  useEffect(() => {
    if (type === 'stock' && stockQuantity) setQuantity(stockQuantity);
    else {
      const stockItem = stock.find((stockItem) => stockItem.data.symbol === data.symbol);
      if (stockItem) setQuantity(stockItem.quantity);
    }
  }, [stockQuantity, stock, type]);

  const handleAdd = () => {
    if (quantity <= 0) return toast.error('Quantity must be greater than 0!');
    addToStock(data, quantity);
    toast.success('Symbol added to stock successfully!');
  };
  const handleUpdate = () => {
    updateSymbol(data, quantity);
    toast.success('Symbol updated successfully!');
  };

  const handleRemove = () => {
    removeFromStock(data);
    toast.success('Symbol removed from stock successfully!');
  };

  return (
    <div className={styles.symbolTableItem}>
      <div className={styles.title}>
        {type === 'symbol' && <h4 className={styles.name}>{`${data.symbol} - ${data.lastPrice}`}</h4>}
        {type === 'stock' && (
          <>
            <h4 className={styles.name}>{`${data.symbol} - ${data.lastPrice}`}</h4>
            <p>{data.weightedAvgPrice} (Weighted Average Price)</p>
          </>
        )}
      </div>
      <div className={styles.input}>
        <NumberInput value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} name="quantity" />
      </div>
      <div className={styles.buttons}>
        {type === 'symbol' && stock.find((stockItem) => stockItem.data.symbol === data.symbol) && (
          <>
            <Button variant="secondary" onClick={handleUpdate}>
              Update
            </Button>
            <Button variant="danger" onClick={handleRemove}>
              Remove
            </Button>
          </>
        )}

        {type === 'symbol' && !stock.find((stockItem) => stockItem.data.symbol === data.symbol) && (
          <Button variant="primary" onClick={handleAdd}>
            Add To Stock
          </Button>
        )}

        {type === 'stock' && (
          <>
            <Button variant="primary" onClick={handleUpdate}>
              Update
            </Button>
            <Button variant="danger" onClick={handleRemove}>
              Remove
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default SymbolTableItem;
