import { getCountries } from './countries';

// Actions
const CHANGE_BASE = 'currency-exchange/currencies/CHANGE_BASE';

// Action creators
export const changeBase = (baseCurrency) => async (dispatch) => {
  dispatch(getCountries(baseCurrency));
  dispatch({ type: CHANGE_BASE, payload: baseCurrency });
};

// Reducer
const reducer = (state = 'USD', action) => {
  switch (action.type) {
    case CHANGE_BASE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
