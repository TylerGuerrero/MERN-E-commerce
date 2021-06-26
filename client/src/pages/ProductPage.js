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
    const { id } = useParams()
    const history = useHistory()

    const { product, loading, error } = useSelector((state) => state.getProductDetails)
    
    const addToCartHandler = () => {
        dispatch(addCartAction(product._id, qty));
        history.push("/cart")
    }

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetailsAction(id))
        }
    }, [dispatch, id, product, match])

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
                                Status: <span>{product.countInStock > 0 ? "In Stock" : "Not in Stock"} </span>
                            </p>
                            <p>
                                Qty
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((x) => {
                                        return (
                                            <option key={x + 1} value={x + 1}> {x + 1} </option>
                                        )
                                    })}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>Add to Cart</button>
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
