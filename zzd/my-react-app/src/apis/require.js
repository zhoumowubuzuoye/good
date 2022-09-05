/*
 * @Author: xiewenhao
 * @Date: 2022-08-25 15:33:58
 * @LastEditTime: 2022-08-30 17:24:34
 * @Description: 
 */
import axios from "axios";
import store from '../store/store'
axios.defaults.headers["Content-Type"] = "application/json";
axios.interceptors.request.use(
      
    config => {
        if (config.url.indexOf('/api') !== -1) {
            return config
        } else {
            console.log(store.getState().Login.token,16);
            config.headers['Authorization'] = store.getState().Login.token
            return config
        }
    }
)
export default axios