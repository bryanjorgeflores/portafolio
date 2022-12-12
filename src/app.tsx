import { Layout } from "antd";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomNavbar } from "./ui/pages/home/components/menu";
import { Home } from "./ui/pages/home/home";
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Projects } from "./ui/pages/projects/projects";
import Highlights from "./ui/pages/highlights/highlights";


const { Header, Content } = Layout;

export default function App() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <BrowserRouter>
            <Layout>
                <CustomNavbar collapsed={collapsed} onCollapse={
                    (collapsed, type) => {
                        console.log(collapsed, type);
                        setCollapsed(collapsed);
                    }
                } />
                <Content>
                    <Header style={{ color: 'white', paddingLeft: '15px', background: '#fffae7' }}>
                        {
                            !collapsed ?
                                <MenuFoldOutlined
                                    size={60}
                                    style={{ fontSize: '150%', color: 'black' }}
                                    onClick={() => {
                                        setCollapsed(!collapsed);
                                    }} />
                                : <MenuUnfoldOutlined
                                    style={{ fontSize: '150%', color: 'black' }}

                                    onClick={() => {
                                        setCollapsed(!collapsed);
                                    }} />
                        }
                        &emsp;
                        <span style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                            Bryan Jorge
                        </span>
                    </Header>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/highlights" element={<Highlights />} />
                    </Routes>
                </Content>
            </Layout>
        </BrowserRouter>
    );
}