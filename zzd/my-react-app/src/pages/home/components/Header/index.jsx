/*
 * @Author: xiewenhao
 * @Date: 2022-08-30 16:27:08
 * @LastEditTime: 2022-09-02 09:33:58
 * @Description:
 */
import { connect } from "react-redux";
import { Layout, Space } from "antd";
import Wrapper from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import { loginOut } from "../../../login/store/actionCreate";
const { Header } = Layout;
const MyHeader = (props) => {
  const { userinfo, leave } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const updateInfo = () => {
    if (location.pathname === "/home/update") {
      navigate(-1);
    } else {
      navigate("/home/update");
    }
  };
  const layout = () => {
    leave();
    navigate("/login");
  };
  return (
    <Wrapper>
      <Header className="header">
        <div className="app_name">都比家属</div>
        <div className="my_user">
          <Space>
            <UserOutlined
              color="white"
              onClick={updateInfo}
              style={{ cursor: "pointer" }}
            />
            <div>{userinfo.nickname}</div>
            <PoweroffOutlined
              color="white"
              onClick={layout}
              style={{ cursor: "pointer" }}
            />
          </Space>
        </div>
      </Header>
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    leave() {
      dispatch(loginOut());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyHeader);
