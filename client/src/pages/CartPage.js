import React from 'react'

import CartItem from '../components/CartItem'
import './CartPage.css'

const CartPage = () => {
    return (
        <div className="cart_page">
            <div className="cartpage_left">
                <h2>Shopping Cart</h2>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

            </div>
            <div className="cartpage_right">
                <div className="cartpage_info">
                    <p>Subtotal (0) items </p>
                    <p>$499.99 </p>
                    <p>Subtotal (0) items </p>
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
