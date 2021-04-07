import {Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const  App = () => {
  return (
    <>
        <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </>
  );
}

export default App;
