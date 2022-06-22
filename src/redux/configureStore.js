import { configureStore } from '@reduxjs/toolkit';
import currencies from './currencies/currencies';

const store = configureStore({
  reducer: {
    currencies,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
