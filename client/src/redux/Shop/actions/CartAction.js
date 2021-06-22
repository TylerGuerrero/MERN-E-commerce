// action creators return a action object that have a type 
// field and a payload field

// actions are the only way to make a call to update
// the global state object within your application

import * as types from '../Types'

export const addCartRequestAction = () => {
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

export const addCartAction = () => (dispatch) => {
    dispatch(addCartRequestAction())

    try {   
        dispatch(addCartSuccess())
    } catch (error) {
        dispatch(addCartError(error))
    }   
}