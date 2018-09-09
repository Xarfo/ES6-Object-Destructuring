import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const user = {
    name: "Abdul Ahmad",
    handle: "@Irro",
    location: "Washington DC"
  };

  //Object destructuring

  const { name, handle, location } = user;

  let csv = "1997, Ford, F350, For Sale";
  let [year, make, model, description] = csv.split(",");

  return (
    <div className="App">
      <h1>{console.log(csv.split(","))}</h1>
      <h2>ES6 Object Destructuring</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
