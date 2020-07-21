import React from "react";
import ReactDOM from "react-dom";

import { data, users } from "./data";
import App from "./components/App";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App users={users} conversation={data.conversation} />,
  rootElement
);
