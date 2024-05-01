import React from "react";
import "./index.css";
import "./index.scss";
import "./static/assets/fonts/poppins.css";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import ReactDOM from "react-dom/client";
import AppRoutes from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  pallete: {
      primary: "#eb5757",
  },
});

root.render(
  <MuiThemeProvider theme={theme}>
    <AppRoutes />
  </MuiThemeProvider>
);
