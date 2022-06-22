import getCountriesCurrencies from '../../API/CurrencyCountriesAPI';

// Actions
const GET_CURRENCIES = 'currency-exchange/currencies/GET_CURRENCIES';

// Action creators
export const getCountries = (baseCurrency) => async (dispatch) => {
  const countriesCurrencies = getCountriesCurrencies(baseCurrency, null);
  dispatch({
    type: GET_CURRENCIES,
    payload: countriesCurrencies,
  });
  // dispatch()
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
