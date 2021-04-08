import {Switch,Route} from 'react-router-dom'
/// using react-toastify to make custom alart for the user
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterComplete from './pages/RegisterComplete'

const  App = () => {
  return (
    <>
        <Header />
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
