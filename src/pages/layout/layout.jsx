import { useState } from "react";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router";

const items = [
  {
    key: "1",
    label: "首页",
  },
  {
    key: "2",
    label: "用户管理",
  },
  {
    key: "3",
    label: "健康数据",
  },
  {
    key: "4",
    label: "饮食管理",
  },
];
const { Sider, Content } = Layout;
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    console.log(e, "我看看");
    const menuMap = {
      1: "/layout/home",
      2: "/layout/user",
      3: "/layout/health",
      4: "/layout/diet",
    };
    navigate(menuMap[e.key]);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Content style={{ padding: "24px", background: "#f5f5f5" }}>
        <Outlet />
      </Content>
    </Layout>
  );
};
export default Home;
