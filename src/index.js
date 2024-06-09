import React from "react";
import "./index.css";
import "./index.scss";
import "./static/assets/fonts/poppins.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ReactDOM from "react-dom/client";
import AppRoutes from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
