/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import CustomButton from "../CustomButton";

test("renders correctly", () => {
  const tree = renderer.create(<CustomButton title="Test Submit" />).toJSON();
  expect(tree).toMatchSnapshot();
});
