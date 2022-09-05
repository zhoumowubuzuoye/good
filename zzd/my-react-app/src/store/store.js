/*
 * @Author: xiewenhao
 * @Date: 2022-08-25 15:14:02
 * @LastEditTime: 2022-08-30 16:10:27
 * @Description: 
 */
import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import reducer from './index'
import {
    persistStore,
    persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage: storage,
}
const myPersistReducer = persistReducer(persistConfig, reducer)
const store = createStore(
    myPersistReducer,
    applyMiddleware(thunk)
)
export const persistor = persistStore(store)
export default store