/*
 * @Author: xiewenhao
 * @Date: 2022-08-22 14:12:01
 * @LastEditTime: 2022-08-23 14:55:42
 * @Description:
 */
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import WodeStyle from "./style";
import Header from "../../components/Header";
import { checkPiao } from "@/page/login/store/actionCreators";
import { InputNumber } from "antd";
const WoDe = (props) => {
  const { moveList, choosePiao } = props;
  const [buyList, setBuyList] = useState([]);
  const [money, setMoney] = useState(0);
  useEffect(() => {
    setBuyList(
      moveList
        .filter((item) => item.check)
        .map((item) => {
          item.number = 1;
          return item;
        })
    );
  }, [moveList]);
  useEffect(() => {
    const money = buyList.reduce((per, next) => {
      return per + +(next.number * next.price);
    }, 0);
    setMoney(money.toFixed(1));
  }, [buyList]);
  const nunmberZero = (id) => {
    setBuyList(buyList.filter((item) => item.id != id));
    const newList = moveList.map((item) => {
      if (item.id === id) {
        item.check = !item.check;
      }
      return item;
    });
    choosePiao(newList);
  };
  const onChange = (value) => {};
  const numberFocus = (e, id) => {
    if (e.target.value == 0) {
      nunmberZero(id);
    } else {
      setBuyList(
        buyList.map((item) => {
          if (item.id === id) {
            item.number = e.target.value;
            return item;
          }
        })
      );
    }
  };
  const crease = (id, number) => {
    console.log(id, number);
    const newList = buyList.map((item) => {
      if (item.id === id) item.number = +number + 1;
      return item;
    });
    setBuyList(newList);
  };
  const increase = (id, number) => {
    const value = number - 1;
    if (value === 0) {
      nunmberZero(id);
    } else {
      const newList = buyList.map((item) => {
        if (item.id === id) item.number = +number - 1;
        return item;
      });
      setBuyList(newList);
    }
  };
  return (
    <WodeStyle>
      <Header></Header>
      <div className="buyList">
        {buyList.map((item) => {
          return (
            <div key={item.title} className="buy_item">
              <div className="item_right">
                <img src={item.url} alt="" />
              </div>
              <div className="item_left">
                <div className="title">{item.title}</div>
                <div className="pf">
                  观众评分：<span style={{ color: "red" }}>{item.pinfen}</span>
                </div>
                <div className="zy">{item.des}</div>
                <div className="money" style={{ color: "red" }}>
                  <span>￥</span>
                  {(item.price * item.number).toFixed(1)}
                  <div className="dobox">
                    <span onClick={() => crease(item.id, item.number)}>+</span>
                    <InputNumber
                      min={0}
                      defaultValue={item.number}
                      value={item.number}
                      onChange={onChange}
                      onBlur={(e) => numberFocus(e, item.id)}
                    />
                    <span onClick={() => increase(item.id, item.number)}>
                      -
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {buyList.length > 0 && <div className="buy_button">购买 ￥{money}</div>}
      </div>
    </WodeStyle>
  );
};
const mapStateToProps = (state) => {
  return {
    moveList: state.Login.moveList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    choosePiao(item) {
      dispatch(checkPiao(item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WoDe);
