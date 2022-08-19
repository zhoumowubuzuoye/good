/*
 * @Author: xiewenhao
 * @Date: 2022-08-09 13:52:30
 * @LastEditTime: 2022-08-19 11:11:11
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "@/store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
