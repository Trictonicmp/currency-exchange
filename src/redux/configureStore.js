import { configureStore } from '@reduxjs/toolkit';
import currencies from './currencies/currencies';

const store = configureStore({
  reducers: {
    currencies,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
