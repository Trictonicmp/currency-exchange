import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import currencies from './currencies/currencies';
import appStatus from './app/appStatus';

const store = configureStore({
  reducer: {
    currencies,
    appStatus,
  },
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
