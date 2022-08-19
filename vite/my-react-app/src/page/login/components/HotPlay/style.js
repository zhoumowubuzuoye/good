/*
 * @Author: xiewenhao
 * @Date: 2022-08-16 14:40:50
 * @LastEditTime: 2022-08-19 09:58:51
 * @Description: 
 */
import styled from "styled-components";

const Hot = styled.div `
    .card_movie{
        border-radius:10%;
        border: 1px solid #e5e5e5;
        background-color:white;
        padding:10px;
        margin: 10px 0;
        .cards{
            display:flex;
            justify-content:space-between;
        }
        .card_item{
            display:flex;
            align-items:center;
            flex-direction:column;
            img{
                width:40px;
                height:40px
            }
        }
        .hot_cards{
            display:flex;
            align-items:center;
            justify-content:space-around;
            margin-top:10px;
            img{
               width:23%
            }
        }
    }
`
export default Hot