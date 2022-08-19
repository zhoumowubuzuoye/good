/*
 * @Author: xiewenhao
 * @Date: 2022-08-19 10:40:53
 * @LastEditTime: 2022-08-19 11:14:17
 * @Description: 
 */
import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import reduucer from './index'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reduucer,
    // 异步 
    applyMiddleware(thunk)
)

export default store