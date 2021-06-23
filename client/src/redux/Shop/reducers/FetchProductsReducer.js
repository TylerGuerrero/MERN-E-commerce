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
    products: [],
    loading: false,
    error: null
}

export const getProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_REQUEST: 
            return {
                ...state,
                loading: true,
                error: null,
                products: []
            }
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null
            }
        case types.GET_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}
