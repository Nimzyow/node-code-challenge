import React from "react";
import { shallow } from "enzyme";

import SearchBar from "./searchBar";
import { findByTestAttr } from "../../../test/TestUtils.js";

//setup unique to each component which is why we arent centralizing this in TestUtils

describe("SearchBar", () => {
  let queryChangeSpy;
  let wrapper;

  beforeEach(() => {
    queryChangeSpy = jest.fn();
    wrapper = shallow(
      <SearchBar
        queryHandler={event => {
          queryChangeSpy(event);
        }}
      />
    );
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "search-bar");
    expect(component.length).toBe(1);
  });

  test("search bar will have initial value of hast", () => {
    const component = findByTestAttr(wrapper, "search-bar");
    console.log(component.props().value);
    expect(component.props().value).toBe("hast");
  });

  test("expect value of query to change", () => {
    let searchBar = findByTestAttr(wrapper, "search-bar");
    searchBar.simulate("change", { target: { value: "Something" } });
    let updatedSearchBar = findByTestAttr(wrapper, "search-bar");
    expect(updatedSearchBar.props().value).toBe("Something");
  });

  test("expect SearchBar to delegate to function queryHandler", () => {
    const searchBar = findByTestAttr(wrapper, "search-bar");
    searchBar.simulate("change", {
      target: { preventDefault() {}, value: "" }
    });
    expect(queryChangeSpy).toBeCalled();
  });
});
