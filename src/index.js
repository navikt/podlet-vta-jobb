import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SWRConfig } from "swr";
//import reportWebVitals from "./reportWebVitals";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ shouldRetryOnError: false }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("podlet-vta-jobb")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
