/*
 * @Author: xiewenhao
 * @Date: 2022-08-22 14:48:33
 * @LastEditTime: 2022-08-23 14:26:48
 * @Description: 
 */
import styled from "styled-components";

const WoDe = styled.div `
    .buyList{
        padding:10px;
        padding-top:40px;
        padding-bottom:60px;
        .buy_button{
            width:60vw;
            height:30px;
            line-height:30px;
            text-align:center;
            background:red;
            position:fixed;
            bottom:50px;
            left:50%;
            transform: translate(-50%, 0%);
            color:#fff
        }
        .item_right{
            margin-right:10px;
        }
        .buy_item{
            margin-top:10px;
            display:flex;
            img{
                width:100px;
                height:120px;
            }
            .money{
                display:flex;
                align-items:center;
                .dobox{
                    margin-left:20px;
                    display:flex;
                    align-items:center;
                    span{
                        width:20px;
                        text-align:center;
                        display:inline-block;
                        border:1px solid grey;
                        flex-shrink:1;
                    }
                }
            }
        }
    }
`
export default WoDe