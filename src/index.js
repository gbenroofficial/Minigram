/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import fireContext from "./contexts/firebase";
import { firebase, db } from "./lib/firebase";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <fireContext.Provider value={{ firebase, db }}>
    <App />
  </fireContext.Provider>
);
