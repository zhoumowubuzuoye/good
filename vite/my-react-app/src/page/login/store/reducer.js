/*
 * @Author: xiewenhao
 * @Date: 2022-08-19 13:39:30
 * @LastEditTime: 2022-08-19 16:16:01
 * @Description: 
 */
import * as actionTypes from './constants'
const defaultState = {
    moveList: [],
    actorsList: [],
    myfirstStore: '',
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_FIRST:
            return {
                ...state,
                myfirstStore: action.data
            }
            break
        case actionTypes.CHANGE_MOVE_LIST:
            return {
                ...state,
                moveList: action.data
            }
            break
        default:
            return state
    }
}