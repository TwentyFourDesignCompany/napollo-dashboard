import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import LoadingAnime from "./component/Animations/LoadingAnimation/LoadingAnime";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
// FONTS
import "./assets/font/Helvetica-Bold.ttf";
import "./assets/font/Helvetica-ExtraBold.ttf";
import "./assets/font/Helvetica-ExtraLight.ttf";
import "./assets/font/Helvetica-Light.ttf";
import "./assets/font/Helvetica-Medium.ttf";
import "./assets/font/Helvetica-Regular.ttf";
import "./assets/font/Helvetica-Thin.ttf";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingAnime />} persistor={persistor}>
      <Router>
        <React.StrictMode>
          <App />
          <ToastContainer />
        </React.StrictMode>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
