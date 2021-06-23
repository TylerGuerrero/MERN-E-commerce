import * as types from '../Types'
import * as api from '../../../api/index'

export const fetchProductsRequest = () => {
    return {
        type: types.GET_PRODUCTS_REQUEST,
        payload: null
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsError = (error) => {
    return {
        type: types.GET_PRODUCTS_ERROR,
        payload: error
    }
}

export const fetchProductsAction = () => async (dispatch) => {
    dispatch(fetchProductsRequest())
    
    try {
        const { data } = await api.fetchAllCartItems()
        dispatch(fetchProductsSuccess(data))
    } catch (error) {
        dispatch(fetchProductsError(error.message))
    }
}