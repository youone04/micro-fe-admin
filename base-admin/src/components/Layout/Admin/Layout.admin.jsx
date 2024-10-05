import { Layout, Menu, Dropdown, Button } from 'antd';
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  LogoutOutlined,
  HomeOutlined,
  BellOutlined,
  DownOutlined,
} from '@ant-design/icons';
import React from 'react';

const { Header, Content, Footer, Sider } = Layout;

const LayoutAdmin = ({ children }) => {
  const userMenu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}> {/* Fullscreen layout */}
      <Sider collapsible style={{ height: '100vh' }}> {/* Sidebar with full height */}
        <div className="logo" style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.3)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', justifyContent: 'space-between' }}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['home']} style={{ flex: 1 }}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="notifications" icon={<BellOutlined />}>
              Notifications
            </Menu.Item>
          </Menu>
          <Dropdown overlay={userMenu} trigger={['click']}>
            <Button type="text" icon={<UserOutlined />} style={{ marginLeft: 'auto' }}>
              User <DownOutlined />
            </Button>
          </Dropdown>
        </Header>
        <Content style={{ margin: '0', padding: '16px', background: '#fff', minHeight: 'calc(100vh - 64px - 70px)' }}>
          {/* Fullscreen content, adjusted for header and footer height */}
          {children}
        </Content>
        <Footer style={{ textAlign: 'center', height: '70px' }}> {/* Adjust footer height */}
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
