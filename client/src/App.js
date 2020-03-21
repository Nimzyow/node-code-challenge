import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/searchBar";
import SearchList from "./components/searchList/searchList";
import axios from "axios";

function App() {
  const [list, setList] = useState(null);
  const [startQuery, setStartQuery] = useState("hast");

  //start search with "hast"
  useEffect(() => {
    queryHandler(startQuery);
  }, []);

  const queryHandler = async selection => {
    if (selection.length > 2) {
      const res = await axios.get(
        `http://localhost:4000/locations?q=${selection}`
      );
      setList(JSON.parse(res.data.msg));
    } else {
      //stop rendering list when character number of selection is 2 or less
      setList(null);
    }
  };

  return (
    <Fragment>
      <SearchBar
        queryHandler={selection => {
          queryHandler(selection);
        }}
      />
      <SearchList list={list} />
    </Fragment>
  );
}

export default App;
