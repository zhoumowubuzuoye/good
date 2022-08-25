/*
 * @Author: xiewenhao
 * @Date: 2022-08-22 14:50:37
 * @LastEditTime: 2022-08-23 14:29:34
 * @Description: 
 */
import styled from "styled-components";
const HeaderStyle = styled.div `
    .header{
        position:fixed;
        height: 40px;
        top:0;
        background:red;
        width:100vw;
        text-align:center;
        line-height:40px;
        color:white;
        z-index:999;
        .icon{
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            left:10px;
            color:white;
        }
    }
`
export default HeaderStyle