import React from "react";
import "../App.css";
import { getTacos } from "../actions";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

import NavBar from "./NavBar";

const TacoList = props => {
  return (
    <div className="App">
      <NavBar />
      <header className="list-header">
        <h1>RandoTaco</h1>
        {!props.taco && !props.isFetching && <p>It's taco time</p>}
        {props.isFetching && (
          <Loader type="Puff" color="#c6b19d" height={100} width={100} />
        )}
        <button onClick={props.getTacos}>New Taco</button>
        {props.taco && (
          <div>
            <p>Shell: {props.taco.shell.name}</p>
            <p>Base Layer: {props.taco.base_layer.name}</p>
            <p>Mixin: {props.taco.mixin.name}</p>
            <p>Seasoning: {props.taco.seasoning.name}</p>
            <p>Condiment: {props.taco.condiment.name}</p>

            <p className="cocktail_suggestion ">
              Need a drink to go with that delicious taco? We can generate a
              cocktail suggestion for you too.
            </p>
            <a className="cocktail_button" href="/cocktails">
              Let's Drink
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

// export default BandList;

const mapStateToProps = state => {
  return {
    taco: state.taco,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getTacos })(TacoList);
