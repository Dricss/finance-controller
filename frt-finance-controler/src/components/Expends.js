import TableExpends from "./TableExpends";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme } from "antd";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const { Header, Sider, Content } = Layout;

const Expends = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        style={{ background: colorBgContainer }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Sidebar SelectedKey="3" />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <h1>Expends</h1>
          <TableExpends />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Expends;
