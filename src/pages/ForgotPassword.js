import React,{useEffect, useState} from 'react'
import {Auth} from '../firebase/firebase'
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'

const ForgotPassword = ({history}) => {
    const [email, setEmail]= useState('')
    const {user} = useSelector(state => ({...state}))
    useEffect(() => {
        if(user){
            history.push('/')
        }
    },[user,history])

    const handelSubmit = async (e) => {
        e.preventDefault();
        const config = {
            //url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
            
            url: 'http://localhost:3000/login',
            handleCodeInApp: true
            
        }
        await Auth.sendPasswordResetEmail(email, config)
        .then(() => {
            setEmail('')
            toast.success('Check your Email For Password Reset')
        })
        .catch((err) => {
            toast.error(err.message)
        })
    }
    return (
        <div className='container p-5'>
        <div className='row'>
            <div className=' col-md-6 offset-md-3'>
                <h4>Forgot password</h4>
                <form onSubmit={handelSubmit}>
                    <input type='email' className='form-control' required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' autoFocus />

                    <button type='submit' className='btn btn-raised my-2' disabled={!email}>Send</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default ForgotPassword
