import React from 'react'
import { Link } from 'react-router-dom'

import './Sidedrawer.css'

const SideDrawer = ({ show, setSideToggle }) => {
    return (
        <div className={show ? "show sidedrawer" : "sidedrawer"}>
            <ul className="sidedrawer_links" onClick={() => setSideToggle(!show)}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart<span className="sidedrawer_cartbadge">0</span>
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
