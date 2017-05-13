import {createStore, combineReducers, applyMiddleware} from 'redux'

import {routerReducer, routerMiddleware, push} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from '../reducer/index.js' // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
const store = createStore(combineReducers({reducers: reducers, router: routerReducer}), applyMiddleware(middleware));
// console.log(store,history);
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export {
    store,
    history
}
