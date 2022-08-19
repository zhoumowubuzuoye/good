/*
 * @Author: xiewenhao
 * @Date: 2022-08-19 10:14:01
 * @LastEditTime: 2022-08-19 17:00:46
 * @Description: 
 */
import styled from "styled-components";

const NowPlay = styled.div `
.now{
    border-radius:10%;
    border: 1px solid #e5e5e5;
    background-color:white;
    padding:10px;
    margin: 10px 0;
    position: relative;
}
.title{
    color: black;
    font-size: 14px;
    font-weight: 600;
    margin-left: 0.1rem;
    margin-right: 8rem;
}
.more{
    top:10px;
    position: absolute; 
    right: 10px;
    color: #666;
    font-size:14px
}
.now_cards{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-top:10px
}
.item_card{
    flex:24%;
    text-align:center;
    margin-bottom:10px;
    img{
        width:90%;
        height:100px;
        margin:0 auto
    }
    .button{
        color: white;
        border-color: white;
        width: 60px;
        height: 20px;
        text-align: center;
        line-height: 1.2rem;
        background-color: red;
        outline-style: none;
        box-sizing: border-box;
        color: #fff;
        display: flex;
        justify-content: space-around;
        white-space: nowrap;
        font-weight: 500;
        cursor: pointer;
        border-radius: 0.6rem;
        margin:0 auto;
        line-height:20px
    }
}
`
export default NowPlay