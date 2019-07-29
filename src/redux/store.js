import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './rootReducer';


// the middlewares that store is expecting from redux is going to be an array
const middlewares = [logger]

// createStore --> takes a rootReducer and the return value of applyMiddleware
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store





/* 
* logger

- it's a redux-middleware that takes an action and logs it to the console, 
  before it goes to the reducer
- it's nice to use when debugging
*/