import React,{useState} from 'react'
import {Auth} from '../firebase/firebase'

/// using react-toastify to make custom alart for the user
import {toast} from 'react-toastify'


const Register = () => {
    const [email, setEmail]= useState('')

    const handelSubmit = async (e) => {
        e.preventDefault();

        const config = {
            //url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            url: 'http://localhost:3000/register/complete',
            handleCodeInApp: true
            
        }

        await Auth.sendSignInLinkToEmail(email, config )

        toast.success(`Email is sent to ${email}. plz conferm to complete your rigistration`);
        // save user email into local storage

        window.localStorage.setItem('emailForRegistration', email);
        // cleare state 
        setEmail('');
    }
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className=' col-md-6 offset-md-3'>
                    <h4>Register</h4>
                    <form onSubmit={handelSubmit}>
                        <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' autoFocus />

                        <button type='submit' className='btn btn-raised my-2'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
