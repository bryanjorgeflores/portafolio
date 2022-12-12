import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import './menu.css';
import { Link } from 'react-router-dom';
import { menuItems } from '../../../../data/menu_items';
const { Header, Sider } = Layout;
const { Title } = Typography;


export const CustomNavbar = ({ collapsed, onCollapse }) => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            trigger={null}
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={onCollapse}
            collapsed={collapsed}
            style={{ backgroundColor: '#494554', }}

        >
            {/* <div className="logo" /> */}
            <Menu
                style={{ backgroundColor: '#494554', color:'white' }}
                mode="inline"
                defaultSelectedKeys={['0']}
            // items={(
            //     (label, index) => (<Link to=''></Link>),
            // )}

            >
                {menuItems.map((item, index) => <Menu.Item key={index}>
                    <span color='white'>{item.name}</span>
                    <Link to={item.url} />
                </Menu.Item>)}

            </Menu>

        </Sider>
    );
}

