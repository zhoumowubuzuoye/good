/*
 * @Author: xiewenhao
 * @Date: 2022-08-31 15:42:57
 * @LastEditTime: 2022-09-01 16:07:50
 * @Description:
 */
import { Button, Checkbox, Form, Input } from "antd";
import { updatePassword } from "@/apis/api";
import { useEffect } from "react";
import { loginOut } from "../../../../../login/store/actionCreate";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
const UpdatePassword = (props) => {
  const { removeToken } = props;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    updatePassword(values).then((res) => {
      removeToken();
      navigate('/login')
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const repeactPassword = (_, value) => {
    if (value !== form.getFieldValue("newPwd")) {
      return Promise.reject();
    } else {
      return Promise.resolve();
    }
  };
  const myPassword = (_, value) => {
    if (value !== form.getFieldValue("reNewPwd")) {
      form.validateFields(["reNewPwd"]);
    }
    return Promise.resolve();
  };

  return (
    <div className="from">
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 12,
        }}
        className="update_from"
        form={form}
        validateTrigger="onBlur"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="原密码"
          name="oldPwd"
          rules={[
            {
              required: true,
              message: "请输入原密码并且至少6个字符",
              min: 6,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="新密码"
          name="newPwd"
          rules={[
            {
              required: true,
              message: "请输入新密码",
              min: 6,
            },
            {
              validator: myPassword,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="重复新密码"
          name="reNewPwd"
          rules={[
            {
              required: true,
              min: 6,
              message: "至少6",
            },
            {
              message: "请输出重复密码",
              validator: repeactPassword,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            修改密码
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeToken() {
      dispatch(loginOut());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword);
