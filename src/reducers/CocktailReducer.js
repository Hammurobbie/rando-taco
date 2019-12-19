import {
  FETCH_COCKTAIL,
  FETCH_COCKTAIL_SUCCESS,
  FETCH_COCKTAIL_FAIL
} from "../actions";

const initialState = {
  cocktail: null,
  isFetching: false,
  error: ""
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAIL:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COCKTAIL_SUCCESS:
      return {
        ...state,
        cocktail: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_COCKTAIL_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
