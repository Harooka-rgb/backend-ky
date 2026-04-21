import { useState, useEffect } from 'react';
import { Avatar, Breadcrumb, Table, Layout, Menu, theme } from 'antd';
import { FaUsersBetweenLines } from "react-icons/fa6";
import { PiShoppingCartThin } from "react-icons/pi";
import { getAllUsers } from './api/userService';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('clients', '1', <FaUsersBetweenLines />),
  getItem('orders', '2', <PiShoppingCartThin />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('1'); // 1-clients, 2-orders
  const [users, setUsers] = useState([{
    "name": "Jalil",
    "phone": "+996 771150541",
    "secondary_phone": "+996 708 05 48 78",
    "email": "Jalil@gmail.com",
    "address": "Komsomolskoe 19",
    "tags": "empty",
    "notes": "empty",
    "user": 0
  }]);

  const [orders, setOrders] = useState([{
    "id": 1,
    "client": 1,
    "client_name": "Kutya",
    "total_price": "5999.00",
    "status": "new",
    "created_at": "2026-04-21",
    "user": 0
  }]);

  const clientColumns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "secondary_phone",
      dataIndex: "secondary_phone",
      key: "secondary_phone"
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "tags",
      dataIndex: "tags",
      key: "tags"
    },
    {
      title: "notes",
      dataIndex: "notes",
      key: "notes"
    },
  ];

  const orderColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Client ID",
      dataIndex: "client",
      key: "client"
    },
    {
      title: "Client Name",
      dataIndex: "client_name",
      key: "client_name"
    },
    {
      title: "Total Price",
      dataIndex: "total_price",
      key: "total_price"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at"
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user"
    },
  ];

  useEffect( () => {
    getAllUsers().then(data => {
      if (data && data.length > 0) {
        setUsers(data);
      }
    }).catch(err => console.log(err));
  }, [] )

  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const currentYear = new Date().getFullYear();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ 
          padding: "0 10px", 
          height: 80, 
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          background: colorBgContainer }} >
          <Avatar size={50} src="https://imgv3.fotor.com/images/homepage-feature-card/fotor-3d-avatar.jpg" />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Table 
            columns={selectedMenu === '1' ? clientColumns : orderColumns} 
            dataSource={selectedMenu === '1' ? users : orders} 
          />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Students CRM ©{currentYear} Created by A28 Group
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;