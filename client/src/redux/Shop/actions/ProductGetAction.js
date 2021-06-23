import * as types from '../Types'
import * as api from '../../../api/index'

export const getProductDetailsRequest = () => {
    return {
        type: types.GET_PRODUCT_DETAILS_REQUEST,
        payload: null
    }
}

export const getProductDetailsSuccess = (product) => {
    return {
        type: types.GET_PRODUCT_DETAILS_SUCCESS,
        payload: product
    }
}

export const getProductDetailsError = (error) => {
    return {
        type: types.GET_PRODUCT_DETAILS_ERROR,
        payload: error
    }
}

export const getProductDetailsAction = (id) => async (dispatch, getState) => {
    dispatch(getProductDetailsRequest())

    try {
        const { data } = await api.getCartItem(id)
        dispatch(getProductDetailsSuccess(data))
    } catch (error) {
        dispatch(getProductDetailsError(error.message))
    }
}