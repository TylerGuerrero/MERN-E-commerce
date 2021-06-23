import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

// Actions
import { getProductDetailsAction } from '../redux/Shop/actions/ProductGetAction'
import { addCartAction } from '../redux/Shop/actions/CartAddAction'

import './ProductPage.css'

const ProductPage = ({ match }) => {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()

    const { product, loading, error } = useSelector((state) => state.getProductDetails)
    
    console.log(product)

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetailsAction(id))
        }
    }, [dispatch, id])

    return (
        <div className="productpage">
            {loading && <p>Loading...</p>}
            {(product && !loading) && (
                <React.Fragment>
                    <div className="productpage_left">
                        <div className="left_image">
                            <img src={product.imageUrl} alt={product.name}/> 
                        </div>
                        <div className="left_info">
                            <p className="left_name">{product.name}</p>
                            <p>Price: ${product.price}</p>
                            <p> {product.description} </p>
                        </div>
                    </div>
                    <div className="productpage_right">
                        <div className="right_info"> 
                            <p>
                                Price: <span> ${product.price} </span>
                            </p>
                            <p>
                                Status: <span> Stock: {product.countInStock} </span>
                            </p>
                            <p>
                                Qty
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </p>
                            <p>
                                <button type="button">Add to Cart</button>
                            </p>
                        </div>
                    </div>
                </React.Fragment>
            )}
            {error && <p> { error } </p>}
            
        </div>
    )
}

export default ProductPage
