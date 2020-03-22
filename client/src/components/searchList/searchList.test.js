import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/TestUtils";

import SearchList from "./searchList";

describe("SearchList.js", () => {
  const defaultProps = {
    list: [
      {
        geonameid: 1,
        name: "hastings",
        latitude: 1000,
        longitude: 2000
      },
      {
        geonameid: 2,
        name: "something",
        latitude: 2000,
        longitude: 3000
      }
    ]
  };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<SearchList {...setupProps} />);
  };

  test("renders nothing if list is empty", () => {
    const wrapper = setup({ list: null });
    const component = findByTestAttr(wrapper, "search-list");
    expect(component.length).toBe(0);
  });
  test("renders something if list is present", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "search-list");
    expect(component.length).toBe(1);
  });
});
