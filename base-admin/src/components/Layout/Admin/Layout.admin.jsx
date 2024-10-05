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
import { Link } from 'react-router-dom';
import { pathRoutes } from '../../../utils/const-routes/const.routes';
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

  let pathname = window.location.pathname.split('/');
  return (
    <Layout style={{ minHeight: '100vh' }}> {/* Fullscreen layout */}
      <Sider collapsible style={{ height: '100vh' }}> {/* Sidebar with full height */}
        <div className="logo" style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          borderRadius: 4, height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.3)'
        }}>
          <h3>Logo</h3>
        </div>
        <Menu theme="dark" defaultSelectedKeys={[`/${pathname[1]}`]} mode="inline">
          <Menu.Item key="/" icon={<DashboardOutlined />}>
            <Link to={pathRoutes.homeBase}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/user" icon={<UserOutlined />}>
          <Link to={pathRoutes.viewUser}>
            Users
          </Link>
          </Menu.Item>
          <Menu.Item key="/admin" icon={<UserOutlined />}>
            <Link to={pathRoutes.viewAdmin}>
              Admin
            </Link>
          </Menu.Item>
          <Menu.Item key="/faktur" icon={<UserOutlined />}>
            <Link to={pathRoutes.viewFaktur}>
              Faktur
            </Link>
          </Menu.Item>
          <Menu.Item key="/settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="/logout" icon={<LogoutOutlined />}>
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
