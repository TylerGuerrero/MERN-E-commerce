import { combineReducers } from 'redux'
import { CartReducer } from './Shop/reducers/CartReducer'

export const rootReducer = combineReducers({
    cart: CartReducer    
})