import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; //BOOTSTRAP IMPORT

import { Provider } from "react-redux";
import store from "./store";

//add store to the Provider - so we can reach to it In every component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
