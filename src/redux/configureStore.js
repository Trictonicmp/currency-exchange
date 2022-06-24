import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countries from './countries/countries';
import appStatus from './app/appStatus';
import baseCurrency from './countries/baseCurrency';
import filteredCountries from './countries/filteredCountries';
import selectedCountry from './selectedItem/selectedITem';

const store = configureStore({
  reducer: {
    baseCurrency,
    countries,
    filteredCountries,
    selectedCountry,
    appStatus,
  },
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
