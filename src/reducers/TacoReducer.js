import { FETCH_TACO, FETCH_TACO_SUCCESS, FETCH_TACO_FAIL } from "../actions";
import {
  FETCH_COCKTAIL,
  FETCH_COCKTAIL_SUCCESS,
  FETCH_COCKTAIL_FAIL
} from "../actions/CocktailAction";

const initialState = {
  taco: null,
  isFetching: false,
  error: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TACO:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_TACO_SUCCESS:
      return {
        ...state,
        taco: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_TACO_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
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

export default reducer;
