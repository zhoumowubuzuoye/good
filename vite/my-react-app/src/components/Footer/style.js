/*
 * @Author: xiewenhao
 * @Date: 2022-08-22 09:44:24
 * @LastEditTime: 2022-08-22 13:31:35
 * @Description: 
 */
import styled from "styled-components";

const FooterStyle = styled.div `
    position:fixed;
    bottom:0;
    background:white;
    width:100vw;
    height:50px;
    .footer{
        justify-content: space-around;
        display: flex;
        align-items: center;
        height:100%;
        margin-top: 2px;
    }
    .link{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export default FooterStyle