import React from "react";
import "./searchList.css";
import PropTypes from "prop-types";

const SearchList = ({ list }) => {
  if (list == null || list.length === 0) {
    return null;
  }

  return (
    <ul className="search-list" data-test="search-list">
      {list.map(item => {
        return (
          <li
            key={item.geonameid}
            className="search-results"
            data-test="search-results"
          >
            {item.name}
            <p className="item-displayed-horizontally" data-test="search-item">
              ({item.latitude}, {item.longitude})
            </p>
          </li>
        );
      })}
    </ul>
  );
};

SearchList.propTypes = {
  list: PropTypes.array
};

export default SearchList;
