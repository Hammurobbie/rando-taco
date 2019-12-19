import React from "react";
import "../App.css";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="landingHeader">RandoTaco</h1>
        <p>
          There are endless ways to make a taco. Let me generate a new recipe
          for ya.
        </p>
        <a className="App-link" href="/home" rel="noopener noreferrer">
          Let's get started
        </a>
      </header>
    </div>
  );
}

export default LandingPage;
