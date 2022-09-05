/*
 * @Author: xiewenhao
 * @Date: 2022-08-26 17:26:16
 * @LastEditTime: 2022-09-01 16:01:37
 * @Description: 
 */
import * as actionTypes from './constants'
import * as api from '@/apis/api'
import {
    createBrowserHistory
} from 'history'
const history = createBrowserHistory()
import {
    message
} from 'antd'

const getToken = (data) => {
    return {
        type: actionTypes.LOGIN,
        data
    }
}
export const Login = (data) => {
    return (dispatch) => {
        api.login(data).then(res => {
            if (res.data.status !== 1) {

                const action = getToken(res.data.token)
                dispatch(action)
                message.success('登录成功')
                history.push({
                    pathname: '/home'
                })
                window.location.reload()
            } else {
                message.error(res.data.msg);
            }
        })
    }
}

export const loginOut = () => {
    return (dispatch) => {
        console.log(dispatch);
        const action = {
            type: actionTypes.REMOVE_TOKEN,
            data: ''
        }
        dispatch(action)
    }
}