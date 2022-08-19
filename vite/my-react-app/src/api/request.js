/*
 * @Author: xiewenhao
 * @Date: 2022-08-19 10:34:03
 * @LastEditTime: 2022-08-19 10:34:33
 * @Description: 
 */
import axios from 'axios'
export const getCities = () =>
    axios.get('https://www.fastmock.site/mock/e7ebe2913686274082d1afac39c04d20/beers/cities')

export const getEvent = () =>
    axios.get('https://www.fastmock.site/mock/e7ebe2913686274082d1afac39c04d20/beers/eventlist')
export const getactors = () =>
    axios.get('https://www.fastmock.site/mock/e7ebe2913686274082d1afac39c04d20/beers/actors')
export const getmoviesRequest = () =>
    axios.get('https://www.fastmock.site/mock/e7ebe2913686274082d1afac39c04d20/beers/movie')