import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStockState } from '@/store/features/stock/stock.types';
import { IStock } from '@/utils/types/symbols.types';

const initialState: IStockState = {
  stock: [],
};
export const stockSlice = createSlice({
  name: 'symbols',
  initialState,
  reducers: {
    setStockList: (state, action: PayloadAction<IStock[]>) => {
      state.stock = action.payload;
    },
  },
});

export const { setStockList } = stockSlice.actions;

export default stockSlice.reducer;
