import React from 'react'
import "../style/navbar.css"
import "../fonts/devil-breeze/style.css"
import {FiHeart} from 'react-icons/fi'
function Navbar() {
    return (
        <div className="navbar" >
            <ul className="nav">
                <li className="nav_item item_1" >
                    <a href="/" className="nav_link link_1">
                        <span>Ak</span>
                    </a>
                </li>
                
                <li className="nav_item item_2">
                        <a href="/" className="nav_link link_2"><FiHeart className="nav_icon" /></a>
                        <a href="/" className="nav_link link_3" >Connexion</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
