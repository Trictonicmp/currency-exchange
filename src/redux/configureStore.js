import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countries from './currencies/currencies';
import appStatus from './app/appStatus';
import baseCurrency from './currencies/baseCurrency';

const store = configureStore({
  reducer: {
    baseCurrency,
    countries,
    appStatus,
  },
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
