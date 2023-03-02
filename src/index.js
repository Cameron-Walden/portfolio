import React from "react";
import Context from "./context/PortfolioContext";
import ReactDOM from "react-dom";
import App from "../src/App.js";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById("root")
);
serviceWorker.register();
