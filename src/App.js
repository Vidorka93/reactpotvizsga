import { useState } from "react";
import "./App.css";
import Client from "./component/client";

const App = () => {
  let [valid, setValid] = useState(false);
  let [data, setData] = useState(false);

  let myFetch = async (query) => {
    let baseUrl = "/api/clients?search=";
    let response = await fetch(baseUrl + query);
    let data = await response.json();
    //
    setData(data);
    //
    console.log(data);
  };

  let validate = () => {
    let inputField = document.getElementById("myField");
    if (inputField.value.length >= 3) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  let searchHandler = () => {
    let query = document.getElementById("myField").value;
    myFetch(query);
  };

  return (
    <div className="App">
      <h1>Veterian admin client</h1>
      <input onChange={() => validate()} id="myField" type="text" />
      {valid ? (
        <button onClick={searchHandler}>Search</button>
      ) : (
        <button disabled>Search</button>
      )}

      {data !== false
        ? data.map((client, key) => <Client key={key} client={client} />)
        : null}
    </div>
  );
};

export default App;
