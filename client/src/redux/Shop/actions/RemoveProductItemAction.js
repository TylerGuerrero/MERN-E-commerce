import * as types from '../Types'

export const removeProductDetails = () => (dispatch) => {
    dispatch({type: types.GET_PRODUCT_DETAILS_RESET})
}