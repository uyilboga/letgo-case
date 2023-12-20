import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppState } from '@/store/features/app/app.types';

const initialState: IAppState = {
  preloader: false,
};

export const appSlice = createSlice({
  name: 'symbols',
  initialState,
  reducers: {
    setPreloader: (state, action: PayloadAction<boolean>) => {
      state.preloader = action.payload;
    },
  },
});

export const { setPreloader } = appSlice.actions;

export default appSlice.reducer;
