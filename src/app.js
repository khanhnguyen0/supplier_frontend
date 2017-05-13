import React from 'react'
import ReactDOM from 'react-dom'
import Style from './style/main.scss';
import { Provider } from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'


import { Route,Link } from 'react-router-dom'
import NavBar from './component/nav-bar.js'
import Home from './route/home.js'
import About from './route/about.js'
import Login from './route/login.js';

// console.log(Home);
import {store, history} from './store/store.js';


// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
      <NavBar />
      <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
