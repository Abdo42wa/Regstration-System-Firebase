import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../redux/actions'
import { Menu } from 'antd';
/// icon to use in the menu ex. "icon={<MailOutlined />}"
import { AppstoreOutlined, SettingOutlined,UserOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';
import firebase from 'firebase'
const { SubMenu, Item } = Menu; // destructuring SubMenu and Item from Menu
const Header = () => {
  
    const [current,setCurrent]=useState('home')
    const dispatch = useDispatch();
    const {user} = useSelector(state => ({...state}))
    const history = useHistory()


    const handleClick = (e) => {
        setCurrent(e.key);
    }

    const logouthandler = () => {
      firebase.auth().signOut();
      dispatch(logout());
      // rederect user
      history.push('/login');
    }
   
    return (
        <div>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<AppstoreOutlined />}>
          <Link to='/'>Home</Link>
        </Item>
      {!user && 
              <>
              <Item key="register" icon={<UserAddOutlined />} className='float-right'>
                <Link to='/register'>Register</Link>
              </Item>

              <Item key="login" icon={<UserOutlined />} className='float-right'>
                <Link to='/login'>Login</Link>
              </Item>
              </>
          }

            {user &&
              <SubMenu key="SubMenu" icon={<SettingOutlined />} title={user.email && user.email.split('@')[0]}>
              {console.log('lllll',user)}
                <Item key="setting:1">Option 1</Item>
                <Item icon={<LogoutOutlined/>} onClick={logouthandler}>Logout</Item>
              </SubMenu>
            }

          
      </Menu>
        </div>
    )
}

export default Header
