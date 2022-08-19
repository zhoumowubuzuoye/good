/*
 * @Author: xiewenhao
 * @Date: 2022-08-09 15:42:26
 * @LastEditTime: 2022-08-16 10:13:34
 * @Description:
 */
import React, { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const About = lazy(() => import("@/page/about"));
const Login = lazy(() => import("@/page/login"));
export default function routes() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/shouye/*" />}></Route>
      <Route
        path="/shouye/*"
        element={<Login />}
      ></Route>
    </Routes>
  );
}
