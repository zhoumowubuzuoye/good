/*
 * @Author: xiewenhao
 * @Date: 2022-08-25 15:14:02
 * @LastEditTime: 2022-08-25 15:15:37
 * @Description: 
 */
import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
const store = createStore(
    applyMiddleware(thunk)
)

export default store