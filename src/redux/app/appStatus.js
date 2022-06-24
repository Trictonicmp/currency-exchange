// Actions
const ERROR = 'currency-exchange/app/ERROR';
const SUCCESS = 'currency-exchange/app/SUCCESS';
const LOADING = 'currency-exchange/app/LOADING';

// Action creators
export const errorStatus = (errorMessage) => ({ type: ERROR, status: `ERROR + ${errorMessage}` });
export const successStatus = () => ({ type: SUCCESS, status: 'SUCCESS' });
export const loadingStatus = () => ({ type: LOADING, status: 'LOADING' });

// Reducer
const reducer = (state = 'LOADING', action) => {
  switch (action.type) {
    case ERROR:
      return action.status;
    case SUCCESS:
      return action.status;
    case LOADING:
      return action.status;
    default:
      return state;
  }
};

export default reducer;
