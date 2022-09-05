/*
 * @Author: xiewenhao
 * @Date: 2022-08-24 14:34:52
 * @LastEditTime: 2022-09-05 15:54:24
 * @Description:
 */
import React, { useEffect, lazy } from "react";
import { connect } from "react-redux";
import Wrapper from "./style";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "antd";
import MyHeader from "./components/Header";
import { UserInfo } from "./store/actionCreater";
import myContext from "../../untils/createContext";
const Main = lazy(() => import("./components/Main"));
const UpdeInfo = lazy(() => import("./components/UpdateInfo"));
const { Content, Sider } = Layout;
const Home = (props) => {
  const { getUserInfo, myUserInfo } = props;
  const context = {
    getUserInfo,
    myUserInfo,
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <myContext.Provider value={context}>
      <Wrapper>
        <Layout style={{ height: "100%" }}>
          <MyHeader userinfo={myUserInfo}></MyHeader>
          <Routes>
            <Route path="*" element={<Navigate to="main" />}></Route>
            <Route
              path="update"
              element={<UpdeInfo userinfo={myUserInfo} />}
            ></Route>
            <Route path="main/*" element={<Main />}></Route>
          </Routes>
        </Layout>
      </Wrapper>
    </myContext.Provider>
  );
};
const mapStateToProps = (state) => {
  return {
    myUserInfo: state.UserInfo.userInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo(data) {
      dispatch(UserInfo());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
