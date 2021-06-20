import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
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
                        <span className="cartlogo_badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
            <button onClick>
                
            </button>
        </nav>
    )
}

export default Navbar
