import { errorStatus, loadingStatus, successStatus } from '../app/appStatus';
import getCountriesCurrencies from '../../API/CurrencyCountriesAPI';

// Actions
const GET_CURRENCIES = 'currency-exchange/currencies/GET_CURRENCIES';

// Action creators
export const getCountries = (baseCurrency) => async (dispatch) => {
  let countriesCurrencies = [];
  try {
    dispatch(loadingStatus());
    countriesCurrencies = getCountriesCurrencies(baseCurrency, null);
  } catch (error) {
    dispatch(errorStatus(error));
  }

  dispatch(successStatus);
  dispatch({
    type: GET_CURRENCIES,
    payload: countriesCurrencies,
  });
};

// Reducer
const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCIES:
      // do something
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
