// Actions
const CHANGE_BASE = 'currency-exchange/currencies/CHANGE_BASE';

export const changeBase = (baseCurrency) => ({ type: CHANGE_BASE, payload: baseCurrency });

const reducer = (state = 'USD', action) => {
  switch (action.type) {
    case CHANGE_BASE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
