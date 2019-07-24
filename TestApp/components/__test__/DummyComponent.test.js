/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import DummyComponent from "../DummyComponent";

test("renders correctly", () => {
  const tree = renderer.create(<DummyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
