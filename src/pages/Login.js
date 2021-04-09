import React,{useState,useEffect} from 'react'
import {Auth} from '../firebase/firebase'
import {login} from '../pages/redux/actions'
import {useDispatch} from 'react-redux'

import {Button} from 'antd'
import { LoginOutlined, MailOutlined} from '@ant-design/icons';

/// using react-toastify to make custom alart for the user
import {toast} from 'react-toastify'

const Login = ({history}) => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const dispatch = useDispatch();

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
         const result =  Auth.signInWithEmailAndPassword(email,password);
         //const {user} = result;
         const idTokenResult = await (await result).user.getIdTokenResult();
            dispatch(login((await result).user.email,idTokenResult))

            history.push('/')
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className='container p-5'>
        <div className='row'>
            <div className=' col-md-6 offset-md-3'>
                <h4>Register</h4>
                <form onSubmit={handelSubmit}>
                    <div className='form-group'>
                    <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' autoFocus  />
                    </div>
                    <div className='form-group'>
                    <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'  />
                    </div>
                    <Button 
                    type="primary" 
                    shape="round" 
                    block 
                    icon={<LoginOutlined/>} 
                    disabled={!email || password.length < 6}
                    onClick={handelSubmit}
                    className='mb-3'>
                    Login 
                    </Button>
                   
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login
