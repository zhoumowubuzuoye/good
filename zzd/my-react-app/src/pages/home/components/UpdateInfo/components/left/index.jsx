/*
 * @Author: xiewenhao
 * @Date: 2022-08-31 15:42:19
 * @LastEditTime: 2022-08-31 16:35:57
 * @Description:
 */
import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Input } from "antd";
import { updateUsername } from "@/apis/api";
import myContext from "../../../../../../untils/createContext";
const UpdateUserinfo = () => {
  const info = useContext(myContext);
  const { getUserInfo, myUserInfo } = info;
  const [form] = Form.useForm();
  const regEmail = (_, value) => {
    const reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(value)) {
      return Promise.resolve();
    } else {
      return Promise.reject("邮箱信息不正确");
    }
  };
  useEffect(() => {
    form.setFieldsValue(myUserInfo);
  }, []);
  const submit = () => {
    updateUsername({
      ...myUserInfo,
      ...form.getFieldsValue(),
    }).then((res) => {
      getUserInfo();
    });
  };
  return (
    <div className="from">
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 12,
        }}
        layout="horizontal"
        className="update_from"
        form={form}
      >
        <Form.Item
          label="昵称"
          name="nickname"
          rules={[
            {
              required: true,
              message: "请输入昵称",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            {
              required: true,
              validator: regEmail,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button type="primary" onClick={submit}>
            确认修改
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default UpdateUserinfo;
