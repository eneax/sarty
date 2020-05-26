# Storage Notes

On our window object we've access to `sessionStorage` and `localStorage`.

The main difference between these two types of storage is that `sessionStorage` persists the data as long as that particular tab (session) is open. Thus, if we close the page, the data is lost.

`localStorage`, instead, will persist the data until we clear it out. We'll continue to have access to the data even if we close the tab and even the browser.

## localStorage

On `localStorage` we've `getItem()` and `setItem` methods.
The `setItem` method will set the item inside the storage, while `getItem` let's us pull the item out of the storage.
When using `localStorage`, we use a `key` to store and to retrieve the item and we need the item to be in a `string` type.

Example:

```js
const objectToStore = {
  name: 'Enea',
}

// store object in localStorage
window.localStorage.setItem('myObj', JSON.stringify(objectToStore))

// access object in localStorage
const myRetrievedObject = window.localStorage.getItem('myObj')

// retrieve object from localStorage
JSON.parse(myRetrievedObject)
```

## redux-persist

The `redux-persist` library allows us to cache our store, based on certain configurations that we give to `persistStore`.

Inside our `store.js` file:

```js
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from './rootReducer'

const middlewares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)
```

Inside `rootReducer.js`, we've to import the desired default storage first and then write our config options for persisting the root reducer.

In `persistConfig`, we specify:

- the `key` property in order to persist our reducer starting from the root
- the `storage` so that the key goes to this particular storage that we imported from the `redux-persist` lib
- `whitelist`, an array that contains the string name of any reducer that we want to store

```js
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // use localStorage as default storage

import userReducer from './user/userReducer'
import cartReducer from './cart/cartReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

export default persistReducer(persistConfig, rootReducer)
```

Finally, inside `index.js`:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store'

import './index.css'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
)
```
