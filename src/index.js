import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// styles
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { ThemeProvider as MUThemeProvider } from "@material-ui/core/styles";
import materialUiTheme from "./material-ui-theme";

ReactDOM.render(
  <MUThemeProvider theme={materialUiTheme}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </MUThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
