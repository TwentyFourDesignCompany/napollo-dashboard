import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// FONTS
import "./assets/font/Helvetica-Bold.ttf";
import "./assets/font/Helvetica-ExtraBold.ttf";
import "./assets/font/Helvetica-ExtraLight.ttf";
import "./assets/font/Helvetica-Light.ttf";
import "./assets/font/Helvetica-Medium.ttf";
import "./assets/font/Helvetica-Regular.ttf";
import "./assets/font/Helvetica-Thin.ttf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
