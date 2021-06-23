import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

export const getCartItem = async (id) => {
    return await API.get(`/products/${id}`)
}

export const fetchAllCartItems = async () => {
    return await API.get(`/products`)
}