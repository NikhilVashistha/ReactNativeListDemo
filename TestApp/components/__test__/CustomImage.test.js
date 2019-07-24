/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import CustomImage from "../CustomImage";

test("renders correctly", () => {
  const tree = renderer.create(<CustomImage />).toJSON();
  expect(tree).toMatchSnapshot();
});
