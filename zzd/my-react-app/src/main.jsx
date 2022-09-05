/*
 * @Author: xiewenhao
 * @Date: 2022-08-24 13:28:36
 * @LastEditTime: 2022-08-30 16:09:27
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import { persistor } from "./store/store";
import { PersistGate } from "redux-persist/lib/integration/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
