import { combineReducers } from 'redux'
import { CartReducer } from './Shop/reducers/CartReducer'
import { getProductsReducer } from './Shop/reducers/FetchProductsReducer'
import { getProductReducerDetails } from './Shop/reducers/GetSingleProductReducer'

export const rootReducer = combineReducers({
    cart: CartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductReducerDetails  
})