import axios from "axios";

export const FETCH_COCKTAIL = "FETCH_COCKTAIL";
export const FETCH_COCKTAIL_SUCCESS = "FETCH_COCKTAIL_SUCCESS";
export const FETCH_COCKTAIL_FAIL = "FETCH_COCKTAIL_FAIL";

export const getCocktail = () => dispatch => {
  dispatch({ type: "FETCH_COCKTAIL" });
  axios
    .get("https://the-cocktail-db.p.rapidapi.com/random.php", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "f22d87e263mshda1030a1eb5b874p19ecdbjsn8dcf7c84ab31"
      }
    })
    .then(res => {
      console.log("cocktail axios", res.data.drinks[0].strIngredient1);
      dispatch({
        type: FETCH_COCKTAIL_SUCCESS,
        payload: res.data.drinks[0]
      });
    })
    .catch(err => {
      alert(err.message);
      dispatch({ type: FETCH_COCKTAIL_FAIL, payload: err.message });
    });
};
