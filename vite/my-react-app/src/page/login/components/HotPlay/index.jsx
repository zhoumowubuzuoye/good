/*
 * @Author: xiewenhao
 * @Date: 2022-08-16 14:39:31
 * @LastEditTime: 2022-08-19 09:54:05
 * @Description:
 */
import Hot from "./style";
const HotPlay = () => {
  const cards = [
    {
      name: "电影/影院",
      img: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d54a896ca5c54f0fae8b4e4a5ffad17a~tplv-k3u1fbpfcp-watermark.image?",
    },
    {
      name: "演出/玩乐",
      img: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7c000f818024d12b34b112a03e58b79~tplv-k3u1fbpfcp-watermark.image?",
    },
    {
      name: "放映厅",
      img: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12256164b1144b1abf8aa752bd28c8c3~tplv-k3u1fbpfcp-watermark.image?",
    },
    {
      name: "赛事",
      img: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00886a695c4c4e34aef95833cd695314~tplv-k3u1fbpfcp-watermark.image?",
    },
  ];
  const hotCards = [
    {
      name: "first",
      url: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff4c0442889347ae8b07addb78e0c181~tplv-k3u1fbpfcp-watermark.image?",
    },
    {
      name: "second",
      url: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/023f049fcba348be9066010d19a44231~tplv-k3u1fbpfcp-watermark.image?",
    },
    {
      name: "third",
      url: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7661459ea1f46a498c5f3076dd3abcc~tplv-k3u1fbpfcp-watermark.image?",
    },
    {
      name: "second",
      url: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/451b854c7b3e478baa0a992d4a9c3946~tplv-k3u1fbpfcp-watermark.image?",
    },
  ];
  return (
    <Hot>
      <div className="card_movie">
        <div className="cards">
          {cards.map((item) => {
            return (
              <div key={item.name} className="card_item">
                <img src={item.img} alt="" />
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
        <div className="hot_cards">
          {hotCards.map((item) => {
            return <img src={item.url} key={item.url} />;
          })}
        </div>
      </div>
    </Hot>
  );
};

export default HotPlay;
