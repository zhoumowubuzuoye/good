/*
 * @Author: xiewenhao
 * @Date: 2022-08-24 13:28:36
 * @LastEditTime: 2022-08-25 15:15:57
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
