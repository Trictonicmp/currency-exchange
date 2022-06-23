import { errorStatus, loadingStatus, successStatus } from '../app/appStatus';
import getCountriesCurrencies from '../../API/CurrencyCountriesAPI';
import { getFilteredCountries } from './filteredCountries';

// Actions
const GET_COUNTRIES = 'currency-exchange/currencies/GET_COUNTRIES';

const orderCountries = (countries) => [...countries].sort((a, b) => (a.name < b.name ? -1 : 1));

// Action creators
export const getCountries = (baseCurrency) => async (dispatch) => {
  let countriesCurrencies = [];
  try {
    dispatch(loadingStatus());
    countriesCurrencies = await getCountriesCurrencies(baseCurrency);
    countriesCurrencies = orderCountries(countriesCurrencies);
  } catch (error) {
    dispatch(errorStatus(error));
  }

  dispatch({
    type: GET_COUNTRIES,
    payload: countriesCurrencies,
  });
  dispatch(getFilteredCountries(countriesCurrencies, ''));
  dispatch(successStatus());
};

// Reducer
const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
