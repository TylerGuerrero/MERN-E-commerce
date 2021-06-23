import * as types from '../Types'

const initialState = {
    product: {},
    loading: false,
    error: null
}
export const getProductReducerDetails = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                product: action.payload
            }
        case types.GET_PRODUCT_DETAILS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {},
                loading: false,
                error: null
            }
        default: 
            return state
    }
}