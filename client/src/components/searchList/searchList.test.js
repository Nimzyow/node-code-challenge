import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/TestUtils";

import SearchList from "./searchList";

describe("SearchList.js", () => {
  const defaultProps = { list: null };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<SearchList {...setupProps} />);
  };

  test("renders nothing if list is empty", () => {
    let wrapper = setup();
    const component = findByTestAttr(wrapper, "search-list");
    expect(component.length).toBe(0);
  });
});
