/**
 * Sample React Native List App
 */

import React, { Component } from "react";
import AppContainer from "./TestApp/navigation";

import { Provider } from "react-redux";
import { createStore } from "redux";
import ListItemReducer from "./TestApp/store/ListItemReducer";

const store = createStore(ListItemReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
