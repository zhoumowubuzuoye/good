/*
 * @Author: xiewenhao
 * @Date: 2022-08-26 17:26:57
 * @LastEditTime: 2022-09-01 15:46:46
 * @Description: 
 */
import * as actionTypes from './constants'
const defaultState = {
    token: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                token: action.data
            }
            break
        case actionTypes.REMOVE_TOKEN:
            return {
                ...state,
                token: action.data
            }
            default:
                return state
    }
}