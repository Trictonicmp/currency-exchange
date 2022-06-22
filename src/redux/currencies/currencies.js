// Actions
const GET_CURRENCIES = 'currency-exchange/currencies/GET_CURRENCIES';

// Action creators
const getCountriesCurrencies = () => async (dispatch) => {
  // do something
  // dispatch()
};

// Reducer
const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCIES:
      // do something
      return [];
    default:
      return state;
  }
};

export default reducer;
