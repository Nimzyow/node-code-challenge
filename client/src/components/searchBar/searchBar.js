import React, { Fragment, useState } from "react";
import "./searchBar.css";
import PropTypes from "prop-types";

const SearchBar = ({ queryHandler }) => {
  const [query, setQuery] = useState("");

  return (
    <Fragment>
      <input
        type="text"
        id="search-bar"
        name="search-bar"
        value={query}
        onChange={event => {
          setQuery(event.target.value);
          queryHandler(query);
        }}
        className="search-container"
        placeholder="Click here to begin searching for places."
      />
    </Fragment>
  );
};

SearchBar.propTypes = {
  queryHandler: PropTypes.func.isRequired
};

export default SearchBar;
