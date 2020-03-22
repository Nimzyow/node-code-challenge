import React from "react";
import { shallow } from "enzyme";

import SearchBar from "./searchBar";
import { findByTestAttr } from "../../../test/TestUtils.js";

//setup unique to each component which is why we arent centralizing this in TestUtils

describe("SearchBar", () => {
  let queryChangeSpy = jest.fn();

  const setup = () => {
    return shallow(
      <SearchBar
        queryHandler={event => {
          queryChangeSpy(event);
        }}
      />
    );
  };

  test("renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "search-bar");
    expect(component.length).toBe(1);
  });

  test("search bar will have initial value of hast", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "search-bar");
    console.log(component.props().value);
    expect(component.props().value).toBe("hast");
  });

  test("expect value of query to change", () => {
    const wrapper = setup();
    let searchBar = findByTestAttr(wrapper, "search-bar");
    searchBar.simulate("change", { target: { value: "Something" } });
    let updatedSearchBar = findByTestAttr(wrapper, "search-bar");
    expect(updatedSearchBar.props().value).toBe("Something");
  });
});
