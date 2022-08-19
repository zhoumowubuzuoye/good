/*
 * @Author: xiewenhao
 * @Date: 2022-08-09 17:04:10
 * @LastEditTime: 2022-08-09 17:04:15
 * @Description: 
 */
var init = function () {
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (clientWidth >= 640) {
        clientWidth = 640;
    }
    var fontSize = 20 / 375 * clientWidth;
    document.documentElement.style.fontSize = fontSize + "px";
}

init();

window.addEventListener("resize", init);