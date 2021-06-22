import React from 'react'
import { Link, useParams } from 'react-router-dom'

import './Product.css'

const Product = () => {
    const { id } = useParams()

    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="A Product"/> 
            <div className="product_info">
                <p className="info_name">Product 1</p>
                <p className="info_description">Test fenrijqwpgfruipw rqio hturipqe</p>
                <p>$499.99</p>
                <Link to={`products/${id}`} className="info_button">
                    View
                </Link>                    
            </div>
        </div>  
    )
}

export default Product
