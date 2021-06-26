import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = ({ setSideToggle , sideToggle }) => {
    const { cartItems } = useSelector((state) => state.cart)

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <h2>Mern Shopping Cart</h2>
            </div>
            <ul className="navbar_links">
                <li>
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cartlogo_badge">{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
            <button onClick={() => setSideToggle(!sideToggle)}>
                Side Menu
            </button>
        </nav>
    )
}

export default Navbar
