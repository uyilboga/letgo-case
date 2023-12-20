import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISymbolState } from '@/store/features/symbols/symbols.types';
import axiosClient from '@/utils/lib/axiosClient';
import { ISymbol } from '@/utils/types/symbols.types';

type Error = {
  message: string;
  code: string;
};

export const fetchSymbols = createAsyncThunk<ISymbol[]>('symbols/fetchSymbols', async () => {
  try {
    const response = await axiosClient.get('/ticker/24hr');
    return response.data as ISymbol[];
  } catch (error) {
    console.log(`Error: ${(error as Error).message} - ${(error as Error).code}`);
  }
});

const initialState: ISymbolState = {
  symbols: [],
  loading: false,
};

export const symbolsSlice = createSlice({
  name: 'symbols',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSymbols.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSymbols.fulfilled, (state, action: PayloadAction<ISymbol[]>) => {
        state.loading = false;
        state.symbols = action.payload;
      })
      .addCase(fetchSymbols.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default symbolsSlice.reducer;
