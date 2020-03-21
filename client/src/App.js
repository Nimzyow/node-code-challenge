import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/searchBar";
import SearchList from "./components/searchList/searchList";
import axios from "axios";

function App() {
  const [list, setList] = useState(null);
  const [startQuery, setStartQuery] = useState("hast");

  useEffect(() => {
    queryHandler(startQuery);
  }, []);

  const queryHandler = async selection => {
    console.log("we got here " + selection);
    if (selection.length > 2) {
      const res = await axios.get(
        `http://localhost:4000/locations?q=${selection}`
      );
      setList(JSON.parse(res.data.msg));
    } else {
      setList(null);
    }
  };

  return (
    <div className="App">
      <SearchBar
        queryHandler={selection => {
          queryHandler(selection);
        }}
      />
      <SearchList list={list} />
    </div>
  );
}

export default App;
