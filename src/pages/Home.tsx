import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import styled from '@emotion/styled'

const { Header, Content, Footer, Sider } = Layout;

const MyHeader = styled(Header)`
    background-color: white;
    display: flex;

`

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};

const MyFooter = styled(Footer)`
    textAlign: 'center';
    color: '#fff';
    backgroundColor: '#7dbcea';
`

const Home = () => {
  return (
    <Layout>
        <MyHeader>Header</MyHeader>
        <Layout hasSider>
            <Sider style={siderStyle}>Sider</Sider>
            <Content style={contentStyle}>Sider</Content>
        </Layout>
        <MyFooter>Footer</MyFooter>  
    </Layout>
  );
};

export default Home;
