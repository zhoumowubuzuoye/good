/*
 * @Author: xiewenhao
 * @Date: 2022-08-19 10:11:54
 * @LastEditTime: 2022-08-23 09:44:58
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
  const { moveList, getMoviesLists, choosePiao } = props;
  const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    if (moveList.length === 0) {
      getMoviesLists();
    }
  }, []);
  useEffect(() => {
    setBuyList(
      moveList.map((item) => {
        item.checked = false;
        return item;
      })
    );
  }, [moveList]);
  const chooseKey = (id) => {
    const data = moveList.map((item) => {
      if (item.id === id) item.check = !item.check;
      return item;
    });
    choosePiao(data);
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
                <div className="button" onClick={() => chooseKey(item.id)}>
                  {item.check ? "取消" : "购票"}
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
