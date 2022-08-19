/*
 * @Author: xiewenhao
 * @Date: 2022-08-09 13:52:30
 * @LastEditTime: 2022-08-10 10:33:59
 * @Description:
 */
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.less";
import Routes from "./routes";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
