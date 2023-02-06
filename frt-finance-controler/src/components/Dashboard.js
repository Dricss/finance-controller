import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Sidebar from "./Sidebar";
import { Layout, theme, DatePicker } from "antd";
import React, { useState } from "react";
import PieTest from "./PieTest";
const { Header, Sider, Content } = Layout;
const { RangePicker } = DatePicker;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedDate, setSelectedDate] = useState([]);
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
        <Sidebar SelectedKey="1" />
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
          <h1 onClick={() => console.log(selectedDate)}>Dashboard</h1>
          <RangePicker
            onChange={(date, dateString) => setSelectedDate(dateString)}
          />
          <PieTest rangePicker={selectedDate} />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
