/*
 * @Author: xiewenhao
 * @Date: 2022-08-24 14:36:13
 * @LastEditTime: 2022-08-31 10:29:07
 * @Description:
 */
import React, { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const Home = lazy(() => import("@/pages/home"));
const Login = lazy(() => import("@/pages/login"));

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/login" />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home/*" element={<Home />}></Route>
    </Routes>
  );
};

export default MyRoutes;
