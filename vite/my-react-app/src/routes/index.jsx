/*
 * @Author: xiewenhao
 * @Date: 2022-08-09 15:42:26
 * @LastEditTime: 2022-08-22 17:07:16
 * @Description:
 */
import React, { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const About = lazy(() => import("@/page/about"));
const Login = lazy(() => import("@/page/login"));
const Move = lazy(() => import("@/page/move"));
const YanChu = lazy(() => import("@/page/yanchu"));
const SaiShi = lazy(() => import("@/page/saishi"));
const WoDe = lazy(() => import("@/page/wode"));
export default function routes() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/shouye/*" />}></Route>
      <Route path="/shouye/*" element={<Login />}></Route>
      <Route path="/movie" element={<Move />}></Route>
      <Route path="/yanchu" element={<YanChu />}></Route>
      <Route path="/saishi" element={<SaiShi />}></Route>
      <Route path="/wode/:name" element={<WoDe />}></Route>
    </Routes>
  );
}
