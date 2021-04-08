import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
/// icon to use in the menu ex. "icon={<MailOutlined />}"
import { AppstoreOutlined, SettingOutlined,UserOutlined, UserAddOutlined } from '@ant-design/icons';

const { SubMenu, Item } = Menu; // destructuring SubMenu and Item from Menu
const Header = () => {

    const [current,setCurrent]=useState('home')

    const handleClick = (e) => {
        setCurrent(e.key);
    }
    return (
        <div>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<AppstoreOutlined />}>
          <Link to='/'>Home</Link>
        </Item>
        <Item key="register" icon={<UserAddOutlined />} className='float-right'>
          <Link to='/register'>Register</Link>
        </Item>

        <Item key="login" icon={<UserOutlined />} className='float-right'>
          <Link to='/login'>Login</Link>
        </Item>

      

        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="User">
            <Item key="setting:1">Option 1</Item>
            <Item key="setting:2">Option 2</Item>
        </SubMenu>
      </Menu>
        </div>
    )
}

export default Header
