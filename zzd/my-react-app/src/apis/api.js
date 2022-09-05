/*
 * @Author: xiewenhao
 * @Date: 2022-08-25 15:34:03
 * @LastEditTime: 2022-09-01 15:07:57
 * @Description: 
 */
import axios from "./require";
export function login(data) {
    return axios({
        method: 'post',
        url: '/myapi/api/login',
        data
    })
}

export function reguer(data) {
    return axios({
        method: 'post',
        url: '/myapi/api/reguer',
        data
    })
}

export function getUserInfo() {
    return axios({
        method: 'get',
        url: '/myapi/my/userinfo',
    })
}

export function updateUsername(data) {
    return axios({
        method: 'post',
        url: '/myapi/my/update',
        data
    })
}

export function updatePassword(data) {
    return axios({
        method: 'post',
        url: '/myapi/my/password',
        data
    })
}