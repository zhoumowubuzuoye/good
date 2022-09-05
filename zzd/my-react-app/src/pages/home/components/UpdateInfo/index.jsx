/*
 * @Author: xiewenhao
 * @Date: 2022-08-31 10:36:14
 * @LastEditTime: 2022-08-31 16:40:32
 * @Description:
 */
import Wrapper from "./style";
import Left from "./components/left";
import Right from "./components/right";
const UpdateInfo = (props) => {
  return (
    <Wrapper>
      <div className="box">
        <Left />
        <Right />
      </div>
    </Wrapper>
  );
};
export default UpdateInfo;
