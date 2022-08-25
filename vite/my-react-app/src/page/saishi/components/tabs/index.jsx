/*
 * @Author: xiewenhao
 * @Date: 2022-08-23 15:13:13
 * @LastEditTime: 2022-08-23 17:13:07
 * @Description:
 */
import Wrapper from "./style";
import { Tabs, Input } from "antd";

const { TabPane } = Tabs;
const sportTabs = (props) => {
  const { sai, chooseTab } = props;
  const onChange = (key) => {
    chooseTab(key);
  };
  return (
    <Wrapper>
      <div style={{ color: "#666" }}>热门赛事</div>
      <Tabs defaultActiveKey="全部" onChange={onChange} className="tabs">
        <TabPane tab="全部" key="全部"></TabPane>
        <TabPane tab="电竞赛事" key="电竞赛事"></TabPane>
        <TabPane tab="体育赛事" key="体育赛事"></TabPane>
      </Tabs>
      <Input placeholder="Basic usage" />
      <div className="sai">
        {sai.map((item) => {
          return (
            <div key={item.text} className="item_sai">
              <div className="sai_left">
                <img src={item.url} alt="" />
              </div>
              <div className="sai_right">
                <div className="text">{item.text}</div>
                <div className="time">{item.dec}</div>
                <div className="position">{item.pos}</div>
                <div className="money">售票中:{item.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default sportTabs;
