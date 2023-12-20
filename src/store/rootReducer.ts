import { combineReducers } from '@reduxjs/toolkit';

import symbolsReducer from '@/store/features/symbols/symbols.slice';
import stockReducer from '@/store/features/stock/stock.slice';
import appReducer from '@/store/features/app/app.slice';

export const rootReducer = combineReducers({
  app: appReducer,
  symbols: symbolsReducer,
  stock: stockReducer,
});
