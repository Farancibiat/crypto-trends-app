import * as React from "react";
import "./App.css";
import SearchBTC from "./components/SearchBTC";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Pehuen's Crypto Trends App</h1>
      <SearchBTC />
      <div className="semi-footer">
        Develop by{" "}
        <a href="https://www.farancibiat.cl" target="_blank" rel="noreferrer">
          farancibiat.cl
        </a>
        , 2022
      </div>
    </div>
  );
}

export default App;
