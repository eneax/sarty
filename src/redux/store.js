import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import rootReducer from './rootReducer'


const middlewares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

// Persisted version of the store
export const persistor = persistStore(store)
