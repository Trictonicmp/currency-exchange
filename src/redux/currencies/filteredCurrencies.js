// Action
const FILTER_COUNTRIES_BY_NAME = 'currency-exchange/currencies/FILTER_CURRENCIES';

// Action creator
const filterCountries = (countries, search) => async (dispatch) => {
  return dispatch({
    type: FILTER_COUNTRIES_BY_NAME,
    payload: search === '' ? countries : countries.filter((country) => {
      return country.name
    });
  });
};
