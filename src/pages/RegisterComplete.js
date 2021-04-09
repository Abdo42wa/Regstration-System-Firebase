import React,{useState,useEffect} from 'react'
import {Auth} from '../firebase/firebase'

/// using react-toastify to make custom alart for the user
import {toast} from 'react-toastify'

const RegisterComplete = ({history}) => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    useEffect ( () => {

        setEmail(window.localStorage.getItem('emailForRegistration', email))

    },[email])


    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const rezult = await Auth.signInWithEmailLink(email, window.location.href);
            console.log(rezult);
            if (rezult.user.emailVerified) {
                // remove user email from local store
                window.localStorage.removeItem('emailForRegistration');
                // get user id token
                let user = Auth.currentUser
                await user.updatePassword(password);
                const idTokenRezult = await user.getIdTokenResult();
                // redux store
                    console.log('user', user, 'idTokenResualt', idTokenRezult)
                //redirect user to home page

                history.push('/');
            }
        } catch (error) {
            console.log(error);

            toast.error(error.maessage)
        }
    }
    return (
        <div className='container p-5'>
        <div className='row'>
            <div className=' col-md-6 offset-md-3'>
                <h4>Register</h4>
                <form onSubmit={handelSubmit}>
                    <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' disabled />
                    <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' autoFocus />

                    <button type='submit' className='btn btn-raised my-2'>Register</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default RegisterComplete
