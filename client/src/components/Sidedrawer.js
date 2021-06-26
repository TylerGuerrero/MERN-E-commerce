import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Sidedrawer.css'

const SideDrawer = ({ show, setSideToggle }) => {
    const { cartItems } = useSelector((state) => state.cart)

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    return (
        <div className={show ? "show sidedrawer" : "sidedrawer"}>
            <ul className="sidedrawer_links" onClick={() => setSideToggle(!show)}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart<span className="sidedrawer_cartbadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                      Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}


export default SideDrawer
