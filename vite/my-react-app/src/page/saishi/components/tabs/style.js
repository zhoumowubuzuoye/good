/*
 * @Author: xiewenhao
 * @Date: 2022-08-23 15:25:13
 * @LastEditTime: 2022-08-23 17:07:49
 * @Description: 
 */
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top:20px;
    .ant-tabs-top > .ant-tabs-nav::before{
        border-bottom:none
    }
    .tabs{
        display:flex;
        justify-content: space-between;
    }
    .ant-tabs-tab{
        padding:10px 0px
    }
    .ant-tabs-top > .ant-tabs-nav{
        margin: 0px 0 6px 0
    }
    .sai{
        margin-top:20px;
        font-size:14px;
        .item_sai{
            display:flex;
            margin-top:10px;
            .sai_left{
                margin-right:10px
            }
            .sai_right{
                position:relative
            }
            img{
                width:120px;
                border-radius: 10px
            }
            .text{
                font-weight:600;
            }
            .money{
                position: absolute;
                bottom: 0;
                color:red
            }
        }
    }
`
export default Wrapper