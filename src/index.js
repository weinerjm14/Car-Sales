import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { AppReducer } from "./reducers/AppReducer";

import "bulma/css/bulma.css";
import "./styles.scss";

let store = createStore(AppReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
