import React from "react";
import ReactDOM from "react-dom";
import { App } from "./src/App";

export const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const rootElement = document.querySelector("#_marketing-dev-root");
  if (rootElement) {
    mount(rootElement);
  }
}
