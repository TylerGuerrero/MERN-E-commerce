import React from 'react'
import { Link } from 'react-router-dom'

import './Product.css'

const Product = ({ id, desription, imageUrl, name, price }) => {
  
    return (
        <div className="product">
            <img src={imageUrl} alt="A Product"/> 
            <div className="product_info">
                <p className="info_name"> { name } </p>
                <p className="info_description"> { desription } </p>
                <p> ${ price } </p>
                <Link to={`products/${id}`} className="info_button">
                    View
                </Link>                    
            </div>
        </div>  
    )
}

export default Product
