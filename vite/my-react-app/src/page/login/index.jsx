/*
 * @Author: xiewenhao
 * @Date: 2022-08-09 16:31:18
 * @LastEditTime: 2022-08-22 15:48:53
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { Link, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Tabs, Select, Input } from "antd";
import Icon, { UserOutlined } from "@ant-design/icons";
import Warpper from "./style";
import Xuan from "./components/xuan";
import Piao from "./components/piao";
import HotPlay from "./components/HotPlay";
import NowPlay from "./components/NowHot";
const { Option } = Select;
const Home = () => {
  const handleChange = (value) => {
    setChooseValue(value);
  };
  const changeInput = (e) => {
    setInputValue(e.target.data);
  };
  const chooseRoute = (route) => {
    setRouteName(route);
  };
  const [areaList, setAreaList] = useState([]);
  const [chooseValue, setChooseValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [routeName, setRouteName] = useState("");
  const [tabs] = useState([
    {
      name: "好看",
      route: "/shouye/good",
    },
    {
      route: "/shouye/piao",
      name: "选票",
    },
    {
      name: "差评",
      route: "/shouye/bad",
    },
  ]);
  const getList = () => {
    setAreaList([
      { name: "河南", value: "yu" },
      { name: "安徽", value: "hui" },
      { name: "上海", value: "hu" },
    ]);
  };
  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
  }, [chooseValue]);
  return (
    <Warpper>
      <div className="header">
        <div className="img">
          <Icon
            component={UserOutlined}
            className="user_icon"
            style={{ fontSize: "2.4rem" }}
          />
        </div>
        <Select
          bordered={false}
          value={chooseValue}
          style={{ width: 100, marginLeft: "20px" }}
          onChange={handleChange}
          placeholder="请选择城市"
        >
          {areaList.map((item) => {
            return (
              <Option key={item.value} value={item.value}>
                {item.name}
              </Option>
            );
          })}
        </Select>
        <Input
          placeholder="Basic usage"
          value={inputValue}
          className="search_input"
          onChange={changeInput}
        />
      </div>
      <div className="tabs">
        {tabs.map((item) => {
          return (
            <Link
              to={item.route}
              key={item.route}
              className="link"
              onClick={() => chooseRoute(item.route)}
            >
              <span>{item.name}</span>
              <div
                className={("line", item.route === routeName ? "actieve" : "")}
              ></div>
            </Link>
          );
        })}
      </div>
      <Routes>
        {/* <Route path="*" element={<Navigate to="good" />}></Route> */}
        <Route path="good" element={<Xuan />}></Route>
        <Route path="piao" element={<Piao />}></Route>
      </Routes>
      <HotPlay></HotPlay>
      <NowPlay />
    </Warpper>
  );
};

export default Home;
