import "@/pages/login/login.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const handleJump = () => {
    navigate("/layout");
  };
  return (
    <div className="loginContainer">
      <h1 className="loginTitle">个人健康与饮食管理系统</h1>
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        className="loginForm"
      >
        <Form.Item
          name="用户名"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          name="密码"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit" onClick={handleJump}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
