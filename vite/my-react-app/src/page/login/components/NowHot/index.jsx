/*
 * @Author: xiewenhao
 * @Date: 2022-08-19 10:11:54
 * @LastEditTime: 2022-08-19 17:13:38
 * @Description:
 */
import NowStyle from "./style";
import {
  changeFirstStore,
  getMoviesList,
  checkPiao,
} from "../../store/actionCreators";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
const NowPlay = (props) => {
  const {
    moveList,
    getMoviesLists,
    choosePiao,
  } = props;
  const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    getMoviesLists();
  }, []);
  useEffect(() => {
    setBuyList(
      moveList.map((item) => {
        item.checked = false;
        return item;
      })
    );
  }, [moveList]);
  const chooseKey = (item) => {
    console.log(choosePiao);
    choosePiao(item);
  };
  return (
    <NowStyle>
      <div className="now">
        <div className="title">正在热映</div>
        <div className="more">更多31</div>
        <div className="now_cards">
          {buyList.map((item) => {
            return (
              <div key={item.url} className="item_card">
                <img src={item.url} alt="" />
                <div style={{ fontSize: "12px", textAlign: "center" }}>
                  {item.title}
                </div>
                <div className="button" onClick={() => chooseKey(item)}>
                  购票
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </NowStyle>
  );
};
const mapStateToProps = (state) => {
  return {
    firstStore: state.Login.myfirstStore,
    moveList: state.Login.moveList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeFirstStoreDispatch(id) {
      dispatch(changeFirstStore(id));
    },
    getMoviesLists() {
      dispatch(getMoviesList());
    },
    choosePiao(item) {
      dispatch(checkPiao(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NowPlay);
