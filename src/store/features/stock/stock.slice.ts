import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStockState } from '@/store/features/stock/stock.types';
import { IStock } from '@/utils/types/symbols.types';
import { setCookie } from 'cookies-next';

const initialState: IStockState = {
  stock: [],
};
export const stockSlice = createSlice({
  name: 'symbols',
  initialState,
  reducers: {
    setStockList: (state, action: PayloadAction<IStock[]>) => {
      state.stock = action.payload;
      setCookie('stock', JSON.stringify(action.payload));
    },
  },
});

export const { setStockList } = stockSlice.actions;

export default stockSlice.reducer;
