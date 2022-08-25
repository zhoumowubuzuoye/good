/*
 * @Author: xiewenhao
 * @Date: 2022-08-22 09:41:15
 * @LastEditTime: 2022-08-22 17:04:36
 * @Description:
 */
import { Link } from "react-router-dom";
import FooterStyle from "./style";
import {
  HomeOutlined,
  SolutionOutlined,
  SmileOutlined,
  SyncOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const myRoute = [
    {
      routerName: "首页",
      route: "/shouye",
      param: false,
      img: <HomeOutlined />,
    },
    {
      routerName: "电影/影院",
      param: false,
      route: "/movie",
      img: <SolutionOutlined />,
    },
    {
      routerName: "演出",
      param: false,
      route: "/yanchu",
      img: <SmileOutlined />,
    },
    {
      routerName: "赛事",
      param: false,
      route: "/saishi",
      img: <SyncOutlined />,
    },
    {
      routerName: "我的",
      param: true,
      route: "/wode",
      img: <UserOutlined />,
    },
  ];
  return (
    <FooterStyle>
      <div className="footer">
        {myRoute.map((item) => {
          return (
            <Link
              to={`${item.route}${item.param ? "/" + item.routerName : ""}`}
              className="link"
              key={item.route}
            >
              {item.img}
              <div>{item.routerName}</div>
            </Link>
          );
        })}
      </div>
    </FooterStyle>
  );
};

export default Footer;
