import React from "react";
import "./searchList.css";

const SearchList = ({ list }) => {
  if (list == null || list.length === 0) {
    return null;
  }

  return (
    <ul className="search-list">
      {list.map(item => {
        return (
          <li key={item.geonameid} className="search-results">
            {item.name}
            <p className="item-displayed-horizontally">
              ({item.latitude}, {item.longitude})
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchList;
