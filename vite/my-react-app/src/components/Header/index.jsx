/*
 * @Author: xiewenhao
 * @Date: 2022-08-22 14:50:32
 * @LastEditTime: 2022-08-22 15:43:15
 * @Description:
 */
import HeaderStyle from "./style";
import { LeftOutlined } from "@ant-design/icons";
import {useParams} from 'react-router-dom'

const Header = () => {
  const params = useParams()
  return (
    <HeaderStyle>
      <div className="header">
        <LeftOutlined className="icon" onClick={()=>window.history.back(-1)} />
        {params.name}
      </div>
    </HeaderStyle>
  );
};

export default Header;
