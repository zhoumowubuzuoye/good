/*
 * @Author: xiewenhao
 * @Date: 2022-08-19 10:40:35
 * @LastEditTime: 2022-08-19 15:51:11
 * @Description: 
 */
import {
    combineReducers
} from 'redux'
import {
    reducer as Login
} from '@/page/login/store'
export default combineReducers({
    Login
})