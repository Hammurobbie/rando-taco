import React from "react";
import "../App.css";
import { getCocktail } from "../actions/CocktailAction";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import axios from "axios";

import NavBar from "./NavBar";

const Cocktail = props => {
  axios
    .get("https://the-cocktail-db.p.rapidapi.com/random.php", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "f22d87e263mshda1030a1eb5b874p19ecdbjsn8dcf7c84ab31"
      }
    })
    .then(res => {
      console.log("cocktail axios", res.data.drinks[0]);
    });

  console.log(props.taco);

  return (
    <div className="App">
      <NavBar />
      <header className="list-header">
        <h1>RandoDrinko</h1>
        {!props.cocktail && !props.isFetching && (
          <p>It's five o'clock somewhere, right?</p>
        )}
        {props.isFetching && (
          <Loader type="Puff" color="#c6b19d" height={100} width={100} />
        )}
        <button onClick={props.getCocktail}>New Cocktail</button>
        {props.cocktail && (
          <div>
            <p>{props.cocktail.strDrink}</p>
            {props.cocktail.strIngredient1 ? (
              <p>
                Ingredient 1: {props.cocktail.strMeasure1}{" "}
                {props.cocktail.strIngredient1}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient2 ? (
              <p>
                Ingredient 2: {props.cocktail.strMeasure2}{" "}
                {props.cocktail.strIngredient2}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient3 ? (
              <p>
                Ingredient 3: {props.cocktail.strMeasure3}{" "}
                {props.cocktail.strIngredient3}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient4 ? (
              <p>
                Ingredient 4: {props.cocktail.strMeasure4}{" "}
                {props.cocktail.strIngredient4}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient5 ? (
              <p>
                Ingredient 5: {props.cocktail.strMeasure5}{" "}
                {props.cocktail.strIngredient5}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient6 ? (
              <p>
                Ingredient 6: {props.cocktail.strMeasure6}{" "}
                {props.cocktail.strIngredient6}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient7 ? (
              <p>
                Ingredient 7: {props.cocktail.strMeasure7}{" "}
                {props.cocktail.strIngredient7}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient8 ? (
              <p>
                Ingredient 8: {props.cocktail.strMeasure8}{" "}
                {props.cocktail.strIngredient8}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient9 ? (
              <p>
                Ingredient 9: {props.cocktail.strMeasure9}{" "}
                {props.cocktail.strIngredient9}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient10 ? (
              <p>
                Ingredient 10: {props.cocktail.strMeasure10}{" "}
                {props.cocktail.strIngredient10}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient11 ? (
              <p>
                Ingredient 11: {props.cocktail.strMeasure11}{" "}
                {props.cocktail.strIngredient11}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient12 ? (
              <p>
                Ingredient 12: {props.cocktail.strMeasure12}{" "}
                {props.cocktail.strIngredient12}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient13 ? (
              <p>
                Ingredient 13: {props.cocktail.strMeasure13}{" "}
                {props.cocktail.strIngredient13}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient14 ? (
              <p>
                Ingredient 14: {props.cocktail.strMeasure14}{" "}
                {props.cocktail.strIngredient14}
              </p>
            ) : (
              ""
            )}
            {props.cocktail.strIngredient15 ? (
              <p>
                Ingredient 15: {props.cocktail.strMeasure15}{" "}
                {props.cocktail.strIngredient15}
              </p>
            ) : (
              ""
            )}

            {props.cocktail.strInstructions ? (
              <p>Instructions: {props.cocktail.strInstructions}</p>
            ) : (
              ""
            )}

            <p className="cocktail_suggestion ">
              Need some grub to go with that delicious cocktail? We can generate
              a taco suggestion for you too.
            </p>

            {/* <p>Feature coming soon. For now, how about another taco?</p> */}

            <a className="cocktail_button" href="/home">
              It's Taco Time
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cocktail: state.cocktail,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getCocktail })(Cocktail);
