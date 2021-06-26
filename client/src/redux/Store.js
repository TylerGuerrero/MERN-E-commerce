import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { rootReducer } from './RootReducer'

const logger = createLogger()
const middleware = [thunk, logger]

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const INITIAL_STATE = {
        cart: {
                cartItems: cartFromLocalStorage
        }
}

export const store = createStore(rootReducer, 
        INITIAL_STATE,
        composeWithDevTools(applyMiddleware(...middleware))
)