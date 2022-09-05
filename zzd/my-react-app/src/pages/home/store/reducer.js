/*
 * @Author: xiewenhao
 * @Date: 2022-08-30 16:50:48
 * @LastEditTime: 2022-08-30 16:56:41
 * @Description: 
 */
import * as actionTypes from './constants'
const defaultState = {
    userInfo: {}
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERINFO:
            return {
                ...state,
                userInfo: action.data
            }
            break;
        default:
            return state
    }
}