/*
 * @Author: xiewenhao
 * @Date: 2022-08-24 13:28:36
 * @LastEditTime: 2022-08-30 15:23:26
 * @Description:
 */
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes";
import React, { Suspense } from "react";
import "antd/dist/antd.less";


const App = () => {
  return (
    <BrowserRouter >
      <Suspense>
        <MyRoutes></MyRoutes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
