import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import currencies from './currencies/currencies';
import appStatus from './app/appStatus';
import baseCurrency from './currencies/baseCurrency';

const store = configureStore({
  reducer: {
    baseCurrency,
    currencies,
    appStatus,
  },
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
