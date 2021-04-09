import React,{useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
/// using react-toastify to make custom alart for the user
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterComplete from './pages/RegisterComplete'

import {login,logout} from './pages/redux/actions'
import {Auth} from './firebase/firebase'

import {useDispatch} from 'react-redux'

const  App = () => {
const dispatch = useDispatch()

  useEffect(() => {

    // to get the current user
    const unsubscribe = Auth.onAuthStateChanged(async (user) => {
      if (user) {
          const idTokenResult = await user.getIdTokenResult()
            console.log('user======>', user)
          dispatch(login(user.email, idTokenResult.token));
         
      }else{
        dispatch(logout())
      }
    });

    return () => unsubscribe ();

  }, [dispatch])
  return (
    <>
        <Header  />
        <ToastContainer/>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login}  />
        <Route path='/register' component={Register} exact />
        <Route path='/register/complete' component={RegisterComplete} exact />
      </Switch>
    </>
  );
}

export default App;
