/*
 * @Author: xiewenhao
 * @Date: 2022-08-31 11:14:50
 * @LastEditTime: 2022-08-31 16:47:13
 * @Description: 
 */
import styled from "styled-components";
const Wrapper = styled.div `
    height:calc(100vh - 64px);
    position:relative;
    .box{
        width:80vw;
        height:calc(80vh - 64px);
        position:absolute;
        transform:translate(-50%,-50%);
        top:50%;
        left:50%;
        display:flex;
    }
    .from{
        width:50%;
        border:1px solid #eee;
        box-shadow:0px 0px 2px #888888;
        .update_from{
            margin-top:20vh
        }
    }
    
`
export default Wrapper