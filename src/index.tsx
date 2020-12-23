import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store/store";
import { Root } from "./navigation/Root";

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    error: { main: red[500] },
  },
  typography: {
    fontSize: 16,
    fontWeightMedium: "inherit",
  },
});

ReactDOM.render(
  <>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Root />
      </Provider>
    </MuiThemeProvider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
