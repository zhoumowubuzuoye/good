/*
 * @Author: xiewenhao
 * @Date: 2022-08-25 15:34:03
 * @LastEditTime: 2022-08-26 16:57:48
 * @Description: 
 */
import axios from "./require";
export function login(data) {
    return axios({
        method: 'post',
        url: '/api/api/login',
        data
    })
}