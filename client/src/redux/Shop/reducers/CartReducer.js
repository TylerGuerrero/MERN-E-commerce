// state object is binded to the inital state object
// action object is binded to the action object from the dipatch method

// (prevState, action) => newState

// state is immutable. It creates a brand new state 
// every time its updated. State is immutable for debugging 
// reasons, when debugging it is useful to know how your state
// changed over time

// when returning reducer you have to make sure your state object
// that you return is still the same type of object as your
// initial state

import * as types from '../Types'

const initialState = {
    loading: false,
    cartItems: [],
    error: null
}

export const CartReducer = (state = initialState, action) => {
    switch (action.payload) {
        case types.ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: action.payload,
                error: null
            }
        case types.ADD_TO_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.REMOVE_FROM_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case types.REMOVE_FROM_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.CART_RESET_REQUEST:
            return {
                ...state,
                loading: true,
                error: null

            }
        case types.CART_RESET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case types.CART_RESET_ERROR:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        default:
            return state
    }
}