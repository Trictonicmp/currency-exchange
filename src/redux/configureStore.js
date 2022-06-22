import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countries from './countries/countries';
import appStatus from './app/appStatus';
import baseCurrency from './countries/baseCurrency';
import filteredCountries from './countries/filteredCountries';

const store = configureStore({
  reducer: {
    baseCurrency,
    countries,
    filteredCountries,
    appStatus,
  },
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
