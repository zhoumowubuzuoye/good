/*
 * @Author: xiewenhao
 * @Date: 2022-08-24 14:34:52
 * @LastEditTime: 2022-08-26 17:07:03
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Wrapper from "./style";
import { login } from "../../apis/api";
const Login = () => {
  const [from] = Form.useForm();
  const onFinish = (values) => {
    login(values).then((res) => {
      console.log(res);
    });
  };
  const zhuCe = () => {};
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Wrapper>
      <div className="Login">
        <div className="login_name">登录</div>
        <Form
          className="formStyle"
          name="from"
          form={from}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
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
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                marginRight: "60px",
              }}
            >
              登录
            </Button>
            <Button  onClick={zhuCe}>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
