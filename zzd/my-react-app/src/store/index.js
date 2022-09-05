/*
 * @Author: xiewenhao
 * @Date: 2022-08-25 15:12:44
 * @LastEditTime: 2022-08-30 17:05:09
 * @Description: 
 */
import {
    combineReducers
} from 'redux'
import {
    reducer as Login
} from '@/pages/login/store'
import {
    reducer as UserInfo
} from '@/pages/home/store'
export default combineReducers({
    Login,
    UserInfo
})