/*
 * @Author: xiewenhao
 * @Date: 2022-08-16 09:55:35
 * @LastEditTime: 2022-08-19 16:05:15
 * @Description:
 */
import { Carousel } from "antd";
import PiaoStyle from "./style";
const contentStyle = {
  color: "#fff",
  width: "100%",
};
const Piao = () => {
  const onChange = (currentSlide) => {
  };
  const imgs = [
    {
      url: "https://puui.qpic.cn/media_img/lena/PICw0n5js_580_1680/0",
    },
    {
      url: "https://vc.qpic.cn/tpic/mtviw4vsGBMdU/4ney5967pvoxn686/1680",
    },
    {
      url: "https://puui.qpic.cn/media_img/lena/PICv1znd5_580_1680/0",
    },
  ];
  return (
    <PiaoStyle>
      <div>
        <Carousel afterChange={onChange}>
          {imgs.map((item) => {
            return (
              <div className="swaper_img" key={item.url}>
                <img
                  src={item.url}
                  alt=""
                  style={contentStyle}
                  className="img_border"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </PiaoStyle>
  );
};

export default Piao;
