// Action
const FILTER_COUNTRIES_BY_NAME = 'currency-exchange/currencies/FILTER_COUNTRIES_BY_NAME';

const filterCountries = (countries, search) => {
  if (search === '') return countries;

  return countries.filter((country) => (
    country.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
  ));
};

// Action creator
export const getFilteredCountries = (countries, search) => async (dispatch) => (
  dispatch({
    type: FILTER_COUNTRIES_BY_NAME,
    payload: search === '' ? countries : filterCountries(countries, search),
  })
);

const reducer = (state = [], action) => {
  switch (action.type) {
    case FILTER_COUNTRIES_BY_NAME:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
