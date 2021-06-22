import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { rootReducer } from './RootReducer'

const logger = createLogger()
const middleware = [thunk, logger]

export const store = createStore(rootReducer, 
        composeWithDevTools(applyMiddleware(...middleware))
)