/*
 * @Author: xiewenhao
 * @Date: 2022-08-09 16:54:25
 * @LastEditTime: 2022-08-16 14:36:04
 * @Description: 
 */
import styled from "styled-components";
import style from '@/assets/style'
const Wrapper = styled.div `
    animation: background-fade 9s infinite;
    background-image: linear-gradient(to bottom,${style['f-color']} 0%,#f3f3f3 30%);
    padding:1rem;
    height:100vh;
    @keyframes background-fade {
        33.3% {
            background-image: linear-gradient(to bottom,${style['f-color']} 0%,#f3f3f3 30%);
        }
        66.7% {
            background-image: linear-gradient(to bottom,${style['s-color']} 0%,#f3f3f3 30%);
        }
        100% {
            background-image: linear-gradient(to bottom,${style['t-color']} 0%,#f3f3f3 30%);
        };}
    .header{
       height:40px;
       display:flex;
       align-items:center;
       .search_input{
            display: inline-block;
            height:24px;
            width: 300px;
            margin-left: 10px;
            padding: 0rem 1rem 0 1rem;
            border: 1px solid #ccc;
            border-radius: 1.5rem;
            background-color: #faf8fa;
            overflow: hidden;
            color: #333;
       }
    }
    .tabs{
        display:flex;
        justify-content:space-between;
        margin-top:20px;
        margin-bottom:20px
    }
    .link{
        .actieve{
            height:2px;
            width:100%;
            background-color:#1890ff
        }
    }

`
export default Wrapper