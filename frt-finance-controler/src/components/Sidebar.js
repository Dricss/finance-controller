// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   // AppstoreOutlined,
//   ContainerOutlined,
//   DesktopOutlined,
//   // MailOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   PieChartOutlined,
// } from "@ant-design/icons";
// import { Button, Menu } from "antd";
// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem(<Link to={"/"}>Dashboard</Link>, "1", <PieChartOutlined />),
//   getItem(<Link to="/register">Register</Link>, "2", <DesktopOutlined />),
//   getItem(<Link to={"/expends"}>Expends</Link>, "3", <ContainerOutlined />),
// ];
// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };
//   return (
//     <div
//       style={{
//         width: 256,
//       }}
//     >
//       <Button
//         type="primary"
//         onClick={toggleCollapsed}
//         style={{
//           marginBottom: 16,
//         }}
//       >
//         {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//       </Button>
//       <Menu
//         defaultSelectedKeys={["1"]}
//         defaultOpenKeys={["sub1"]}
//         mode="inline"
//         theme="light"
//         inlineCollapsed={collapsed}
//         items={items}
//       />
//     </div>
//   );
// };
// export default Sidebar;

import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

const Sidebar = ({ SelectedKey }) => {
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={[SelectedKey]}
      items={[
        {
          key: "1",
          icon: <PieChartOutlined />,
          label: <Link to={"/"}>Dashboard</Link>,
        },
        {
          key: "2",
          icon: <DesktopOutlined />,
          label: <Link to={"/register"}>Register</Link>,
        },
        {
          key: "3",
          icon: <ContainerOutlined />,
          label: <Link to={"/expends"}>Expends</Link>,
        },
      ]}
    />
  );
};

export default Sidebar;
