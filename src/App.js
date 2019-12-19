import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Taco from "./components/Taco";
import Cocktail from "./components/Cocktail";

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Taco} />
      <Route path="/cocktails" component={Cocktail} />
    </div>
  );
}

export default App;
