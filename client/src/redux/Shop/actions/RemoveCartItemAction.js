// action creators return a action object that have a type 
// field and a payload field

// actions are the only way to make a call to update
// the global state object within your application

import * as types from '../Types'

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({type: types.REMOVE_FROM_CART_SUCCESS, payload: id})
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
} 