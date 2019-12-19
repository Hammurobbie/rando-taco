import axios from "axios";

export const FETCH_TACO = "FETCH_TACO";
export const FETCH_TACO_SUCCESS = "FETCH_TACO_SUCCESS";
export const FETCH_TACO_FAIL = "FETCH_TACO_FAIL";

export const getTacos = () => dispatch => {
  dispatch({ type: "FETCH_TACO" });
  axios
    .get("http://taco-randomizer.herokuapp.com/random")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_TACO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_TACO_FAIL, payload: err.message });
    });
};
