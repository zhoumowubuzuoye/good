/*
 * @Author: xiewenhao
 * @Date: 2022-08-31 10:33:18
 * @LastEditTime: 2022-09-05 17:14:42
 * @Description:
 */
import React, { useEffect, lazy, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import Des from "@/pages/main/des";
import Biao from "../../../main/biao";
import Book from "../../../main/book";
import Niu from "../../../main/niu";
import DesBook from "../../../main/desBook";
import DesNiu from "../../../main/desNiu";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  TrademarkOutlined,
  PieChartOutlined,
  PicCenterOutlined,
  MessageOutlined,
  InsertRowRightOutlined,
  MacCommandOutlined,
  MobileOutlined,
} from "@ant-design/icons";
const { Content, Sider } = Layout;
function getItem(data) {
  return {
    key: data.path,
    icon: data.icon,
    children: data.children ? forMatg(data.children) : undefined,
    label: data.name,
    type: data.type,
  };
}
const forMatg = (data = []) => {
  return data.map((item) => getItem(item));
};
const Main = () => {
  const [myItem, setMyItem] = useState([]);
  const [breadcrumbNameMap, setbreadcrumbNameMap] = useState([]);
  const [routerItem, setRouterItem] = useState([]);
  const forEachChildren = (obj) => {};
  const navigate = useNavigate();
  const homeRoutes = [
    {
      path: "/des",
      name: "简介",
      icon: <TrademarkOutlined />,
      children: [
        {
          path: "/des/chart",
          name: "图标简介",
          icon: <InsertRowRightOutlined />,
          children: [
            {
              path: "/des/chart/app",
              name: "图标简介99",
            },
          ],
        },
        {
          path: "/des/book",
          name: "图标书",
          icon: <MacCommandOutlined />,
        },
        {
          path: "/des/niu",
          name: "图标书",
          icon: <MobileOutlined />,
        },
      ],
    },
    {
      path: "/chart",
      name: "图标",
      icon: <PieChartOutlined />,
      children: [
        {
          path: "/chart/biao",
          name: "秃瓢22",
        },
      ],
    },
    { path: "/book", name: "书籍", icon: <PicCenterOutlined /> },
    { path: "/niu", name: "牛逼", icon: <MessageOutlined /> },
  ];
  const onClick = (e) => {
    console.log(e, "/home/main" + e.key);
    setRouterItem(e.keyPath);
    navigate("/home/main" + e.key);
  };
  const setbreadcrumbNameMapName = (obj, array) => {
    array.forEach((item) => {
      if (item.children) {
        setbreadcrumbNameMapName(obj, item.children);
      }
      obj[item.path] = item.name;
    });
  };

  useEffect(() => {
    const paths = forMatg(homeRoutes);
    let obj = {};
    setbreadcrumbNameMapName(obj, homeRoutes);
    setbreadcrumbNameMap(obj);
    setMyItem(paths);
  }, []);

  return (
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          style={{
            width: 200,
            borderRight: 0,
            height: "100%",
          }}
          defaultOpenKeys={["/des"]}
          defaultSelectedKeys={["/des/chart"]}
          mode="inline"
          items={myItem}
          theme="light"
          onClick={onClick}
        />
        {/* <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
          items={items2}
        /> */}
      </Sider>
      <Layout
        style={{
          padding: "0 0px 24px",
          background: "#FFF",
          margin: "10px 10px 10px 10px",
        }}
      >
        <Breadcrumb
          style={{
            height: "40px",
            lineHeight: "40px",
            background: "#ccc",
            padding: "0 20px",
            marginBottom: "20px",
          }}
        >
          {[...routerItem].reverse().map((item, index) => {
            return (
              <Breadcrumb.Item key={index}>
                {breadcrumbNameMap[item]}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
        {/* <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content> */}
        <Routes>
          <Route path="des/chart/app" element={<Des />}></Route>
          <Route path="chart/biao" element={<Biao />}></Route>
          <Route path="Book" element={<Book />}></Route>
          <Route path="niu" element={<Niu />}></Route>
          <Route path="des/book" element={<DesBook />}></Route>
          <Route path="des/niu" element={<DesNiu />}></Route>
        </Routes>
      </Layout>
    </Layout>
  );
};
export default Main;
