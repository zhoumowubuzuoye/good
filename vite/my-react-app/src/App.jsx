/*
 * @Author: xiewenhao
 * @Date: 2022-08-09 13:52:30
 * @LastEditTime: 2022-08-22 17:07:00
 * @Description:
 */
import React, { useEffect, useState, Suspense } from "react";

import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.less";
import Routes from "./routes";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes></Routes>
        </Suspense>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};
export default App;
