/**
 * Sample React Native List App
 */

import React, { Component } from "react";
import AppContainer from "./TestApp/navigation";

import { Provider } from "react-redux";
import { createStore } from "redux";
import ListItemReducer from "./TestApp/store/ListItemReducer";
import ErrorBoundary from "./TestApp/components/ErrorBoundary";

const store = createStore(ListItemReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <AppContainer />
        </ErrorBoundary>
      </Provider>
    );
  }
}
