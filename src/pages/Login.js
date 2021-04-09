import React,{useState} from 'react'
import {Auth,googleAuthProvider} from '../firebase/firebase'
import {login} from '../pages/redux/actions'
import {useDispatch} from 'react-redux'

import {Button} from 'antd'
import { GoogleOutlined, LoginOutlined} from '@ant-design/icons';

/// using react-toastify to make custom alart for the user
import {toast} from 'react-toastify'

const Login = ({history}) => {
    const [email, setEmail]= useState('ae004869@gmail.com')
    const [password, setPassword]= useState('')
    const dispatch = useDispatch();

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
         const result = await Auth.signInWithEmailAndPassword(email,password);
         const {user} = result;
         const idTokenResult = await user.getIdTokenResult();
            dispatch(login(user.email,idTokenResult.token))

            history.push('/')
        } catch (error) {
            toast.error(error.message)
        }
    }
    const googleLogin = async (e) => {
        e.preventDefault();
        Auth.signInWithPopup(googleAuthProvider)
        .then( async(result) => {
            const {user} = result
            const id = await user.getIdTokenResult();
            dispatch(login(user.email,id.token))
            history.push('/')
        })
        .catch((err) => {
            toast.error(err.message)
        })
        
    }
    return (
        <div className='container p-5'>
        <div className='row'>
            <div className=' col-md-6 offset-md-3'>
                <h4>Login</h4>
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

                    <Button 
                    type="danger" 
                    shape="round" 
                    block 
                    icon={<GoogleOutlined/>} 
                    onClick={googleLogin}
                    className='mb-3'>
                    Login With Google
                    </Button>
                   
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login
