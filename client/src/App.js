import React from "react";
import "./App.css";
import SearchBar from "./components/searchBar/searchBar";
import axios from "axios";

function App() {
  const queryHandler = async selection => {
    console.log("we got here " + selection);
    if (selection.length > 2) {
      const res = await axios.get(
        `http://localhost:4000/locations?q=${selection}`
      );
      console.log(res.data.msg);
    }
  };

  return (
    <div className="App">
      <SearchBar
        queryHandler={selection => {
          queryHandler(selection);
        }}
      />
    </div>
  );
}

export default App;
