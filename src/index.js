import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./style.css";
import { HashRouter } from "react-router-dom";

//const history = createHashHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <HashRouter>
      <Provider store={store}>
          <App />
        </Provider>
    </HashRouter>
  </React.StrictMode>
);