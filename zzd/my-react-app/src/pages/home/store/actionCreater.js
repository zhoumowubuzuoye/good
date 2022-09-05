/*
 * @Author: xiewenhao
 * @Date: 2022-08-30 16:50:59
 * @LastEditTime: 2022-08-30 17:24:57
 * @Description: 
 */
import * as actionTypes from './constants'
import * as api from '@/apis/api'
const getinfo = (data) => ({
    type: actionTypes.GET_USERINFO,
    data
})
export const UserInfo = (data) => { 
    return (dispatch) => {
        api.getUserInfo(data).then(res => {
            const action = getinfo(res.data.data)
            dispatch(action)
        })
    }

}