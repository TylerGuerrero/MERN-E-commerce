import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CartItem from '../components/CartItem'
import { addCartAction } from '../redux/Shop/actions/CartAddAction'
import { removeFromCart } from '../redux/Shop/actions/RemoveCartItemAction'
import './CartPage.css'

const CartPage = () => {
    const dispatch = useDispatch()
    const { loading, cartItems, error } = useSelector((state) => state.cart)
    
    const qytChangeHandler = (id, qty) => {
        dispatch(addCartAction(id, qty))
    }
    
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
      };
    
      const getCartSubTotal = () => {
        return cartItems
          .reduce((price, item) => price + item.price * item.qty, 0)
          .toFixed(2);
      };

    return (
        <div className="cart_page">
            <div className="cartpage_left">
                <h2>Shopping Cart</h2>
                
            {loading && <p> Loading ...</p>}
            {(cartItems.length === 0 && !loading) ? 
            (<div>
                Your cart is Empty&nbsp; 
                <Link to="/">Go back</Link>
            </div>) : cartItems.map((item) => {
                    return (
                        <CartItem 
                        key={item.product}
                        item={item} 
                        qytChangeHandler={qytChangeHandler}
                        removeFromCartHandler={removeFromCartHandler}
                        />
                    )
                })
            }
            {error && <p> {error}</p>}
            </div>
            <div className="cartpage_right">
                <div className="cartpage_info">
                <p>Subtotal ({getCartCount()}) items</p>
                <p>${getCartSubTotal()}</p>
                </div>
                <div>
                    <button>
                        Proceed to checkout
                    </button>
                </div>
            </div>
        </div>
    )
}



export default CartPage
