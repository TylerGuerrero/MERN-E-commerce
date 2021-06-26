// action creators return a action object that have a type 
// field and a payload field

// actions are the only way to make a call to update
// the global state object within your application

import * as types from '../Types'
import * as api from '../../../api/index'

export const addCartRequest = () => {
    return {
        type: types.ADD_TO_CART_REQUEST,
        payload: null
    }
}

export const addCartSuccess = (product) => {
    return {
        type: types.ADD_TO_CART_SUCCESS,
        payload: product
    }
}

export const addCartError = (error) => {
    return {
        type: types.ADD_TO_CART_ERROR,
        payload: error
    }
}

export const addCartAction = (id, qty) => async (dispatch, getState) => {
    dispatch(addCartRequest())
    
    try {
        const { data } = await api.getCartItem(id)

        const cartItem = {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty: qty
        }

        dispatch(addCartSuccess(cartItem))
        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        dispatch(addCartError(error.message))
    }   
}