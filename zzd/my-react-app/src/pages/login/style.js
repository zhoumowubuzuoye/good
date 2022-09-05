/*
 * @Author: xiewenhao
 * @Date: 2022-08-25 16:27:13
 * @LastEditTime: 2022-08-30 17:25:00
 * @Description: 
 */
import styled from "styled-components";
import background from '@/assets/background.png'
const Wrapper = styled.div `
    width:100vw;
    height:100vh;
    background:url(${background});
    background-repeat:no-repeat;
    background-size:100% 100%;
    .login_name{
        font-weight:700;
        color:white;
        height:140px;
        text-align:center;
        line-height:140px;
        font-size:30px
    }
    .ant-form-item-label > label{
        color:white;
    }
    .Login{
        width: 600px;
        height: 400px;
        position: fixed;
        border:1px solid #ccc;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .formStyle{
            width:70%;
            margin:0 auto
        }
    }
`
export default Wrapper