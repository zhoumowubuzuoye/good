/*
 * @Author: xiewenhao
 * @Date: 2022-08-19 13:40:16
 * @LastEditTime: 2022-08-22 09:36:40
 * @Description: 
 */
import * as actionTypes from './constants'
import {
    getactors,
    getmoviesRequest
} from '@/api/request'

const changemovie = (data) => ({
    type: actionTypes.CHANGE_MOVE_LIST,
    data
})
const firstAction = (data) => ({
    type: actionTypes.CHANGE_FIRST,
    data
})

export const getMoviesList = () => {
    return (dispatch) => {
        getmoviesRequest().then(item => {
            const action = changemovie(item.data)
            dispatch(action)
        })
    }
}

export const changeFirstStore = (id) => {
    return (dispatch) => {
        const action = firstAction(id)
        dispatch(action)
    }
}

export const checkPiao = (item) => {
    return (dispatch) => {
        const action = changemovie(item)
        dispatch(action)
    }
}