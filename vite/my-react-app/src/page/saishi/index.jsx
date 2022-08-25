/*
 * @Author: xiewenhao
 * @Date: 2022-08-22 14:08:42
 * @LastEditTime: 2022-08-23 17:16:02
 * @Description:
 */
import React, { useState, useEffect } from "react";
import Wrapper from "./style";
import Tabs from "./components/tabs";
import { getEvent } from "@/api/request";
const SaiShi = () => {
  const [sai, setSai] = useState([]);
  const [propSai, setPropSai] = useState([]);
  useEffect(() => {
    getEvent().then((res) => {
      setSai(res.data);
      setPropSai(res.data);
    });
  }, []);
  const chooseTab = (tab) => {
    if (tab === "全部") {
      setPropSai(sai)
    } else {
      const newList = sai.filter((item) => item.type === tab);
      setPropSai(newList)
    }
  };
  return (
    <Wrapper>
      <div className="title_name">
        <img
          src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad0b22b3dcb64a688522d03e79ceef7e~tplv-k3u1fbpfcp-watermark.image?"
          alt=""
        />
      </div>
      <div className="imgs">
        <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf829e67c48144f79bf8941028009994~tplv-k3u1fbpfcp-watermark.image?"></img>
        <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/066ff0e907d24e51ad6687c8982694cc~tplv-k3u1fbpfcp-watermark.image?"></img>
        <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b93c2a0840964aed907e35790c6e7461~tplv-k3u1fbpfcp-watermark.image?"></img>
      </div>
      <Tabs sai={propSai} chooseTab={chooseTab}></Tabs>
    </Wrapper>
  );
};

export default SaiShi;
