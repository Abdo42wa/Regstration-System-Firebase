import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import 'antd/dist/antd.css'
import thunk from 'redux-thunk'

import { createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './pages/redux/index'

// store
const middleware = [thunk] // thunk alow us to use asecny recuaste
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));



ReactDOM.render(
 <Provider store={store}>
  <BrowserRouter >
  <App />
  </BrowserRouter>
  </Provider>,
    
  
  document.getElementById('root')
);

