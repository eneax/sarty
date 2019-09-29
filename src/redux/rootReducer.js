import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'  // use localStorage as default storage

import userReducer from './user/userReducer'
import cartReducer from './cart/cartReducer'


const persistConfig = {
  key: 'root', // where do you want to store
  storage,
  whitelist: ['cart'] // reducers we want to store (remember user is stored in Firebase)
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

// export rootReducer with persist capabilities
export default persistReducer(persistConfig, rootReducer)
