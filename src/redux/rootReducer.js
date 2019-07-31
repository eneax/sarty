import { combineReducers } from 'redux'

import userReducer from './user/userReducer'
import cartReducer from './cart/cartReducer'


export default combineReducers({
  user: userReducer,  // slice of state related to the user reducer
  cart: cartReducer,
})





/*
* reducer

- it's a function that takes the current state or initial state (which comes from the store) and an action
*/



/*
* root-reducer

- it's the base reducer object that represents the whole state of our app
*/