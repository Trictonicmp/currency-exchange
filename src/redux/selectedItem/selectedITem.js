// Actions
const SELECT_COUNTRY = 'currency-exchange/selected/item/SELECT_COUNTRY';

// Action creators
export const selectCountry = (item) => ({
  type: SELECT_COUNTRY,
  payload: item,
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
