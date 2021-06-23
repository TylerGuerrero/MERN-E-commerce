import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './HomePage.css'
import Product from '../components/Product'
import { fetchProductsAction } from '../redux/Shop/actions/FetchProductsAction'

const HomePage = () => {
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state) => state.getProducts)

    useEffect(() => {
        dispatch(fetchProductsAction())
    }, [dispatch])

    return (
        <div className="homepage">
            <h2 className="homepage_title">Latest Products</h2>
            <div className="homepage_products">
                {loading && <h2>Loading....</h2>}
                {(products && !loading) && products.map((product) => {
                    return (
                        <Product 
                            key={product._id}
                            id={product._id}
                            name={product.name}
                            description={product.description}
                            imageUrl={product.imageUrl}
                            price={product.price}
                            countInStock={product.countInStock}
                        />
                    )
                })}
                {error && <h2>{ error }</h2>}
            </div>
        </div>
    )
}

export default HomePage
