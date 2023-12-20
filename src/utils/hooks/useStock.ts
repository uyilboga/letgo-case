import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ISymbol } from '@/utils/types/symbols.types';
import { setStockList } from '@/store/features/stock/stock.slice';

const useStock = () => {
  const dispatch = useAppDispatch();
  const { stock } = useAppSelector((state) => state.stock);

  const addToStock = (symbol: ISymbol, quantity: number = 1) => {
    const updatedStock = [...stock, { data: symbol, quantity }];
    dispatch(setStockList(updatedStock));
  };

  const removeFromStock = (symbol: ISymbol) => {
    const updatedStock = stock.filter((item) => item.data.symbol !== symbol.symbol);
    dispatch(setStockList(updatedStock));
  };

  const updateSymbol = (symbol: ISymbol, newQuantity: number) => {
    const updatedStock = stock.map((item) => (item.data.symbol === symbol.symbol ? { ...item, quantity: newQuantity } : item));
    if (newQuantity === 0) {
      removeFromStock(symbol);
    } else {
      dispatch(setStockList(updatedStock));
    }
  };

  return {
    addToStock,
    removeFromStock,
    updateSymbol,
  };
};

export default useStock;
