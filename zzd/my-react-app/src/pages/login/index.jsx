/*
 * @Author: xiewenhao
 * @Date: 2022-08-24 14:34:52
 * @LastEditTime: 2022-08-31 14:54:12
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import Wrapper from "./style";
import { Login } from "./store/actionCreate";
import { connect } from "react-redux";
import { reguer } from "@/apis/api";
const Logins = (props) => {
  const [isLogin, setLogin] = useState(true);
  const [isRemember, setRemember] = useState(true);
  const { getToken } = props;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    getToken(values)
  };
  const zhuCe = () => {
    if (isLogin) {
      setLogin(false);
      form.resetFields();
    } else {
      createId(form.getFieldValue());
    }
  };
  const back = () => {
    setLogin(true);
    form.resetFields();
  };
  const createId = (data) => {
    reguer(data).then((res) => {
      if (res.data.status === 0) {
        setLogin(true);
        form.resetFields();
      } else {
        message.error(res.data.msg);
      }
    });
  };
  const onFinishFailed = (errorInfo) => {
  };
  const onValuesChange = (value) => {
    if (value.remember) {
      setRemember(value.remember);
    } else if (value.remember === false) {
      setRemember(value.remember);
    }
  };
  useEffect(() => {
    form.setFieldValue(
      "remember",
      localStorage.getItem("isRemember") ? true : false
    );
  }, []);
  useEffect(() => {
    if (isRemember) {
      localStorage.setItem("isRemember", true);
    } else {
      localStorage.removeItem("isRemember");
    }
  }, [isRemember]);
  return (
    <Wrapper>
      <div className="Login">
        <div className="login_name">{isLogin ? "登录" : "注册"}</div>
        <Form
          className="formStyle"
          name="form"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          onValuesChange={onValuesChange}
        >
          <Form.Item
            label="Username"
            name="username"
            initialValue="admin"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            initialValue="admin123"
            rules={[  
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            wrapperCol={{ offset: 8, span: 16 }}
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            {isLogin ? (
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  marginRight: "60px",
                }}
              >
                登录
              </Button>
            ) : (
              <></>
            )}
            <Button onClick={zhuCe}>注册</Button>
            {!isLogin ? (
              <Button
                type="primary"
                style={{
                  marginLeft: "60px",
                }}
                onClick={back}
              >
                返回
              </Button>
            ) : (
              <></>
            )}
          </Form.Item>
        </Form>
      </div>
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getToken(data) {
      dispatch(Login(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Logins);
