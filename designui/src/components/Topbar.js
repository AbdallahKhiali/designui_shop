import React, { useState } from 'react'
import '../style/topbar.css'
import "../fonts/interstate/style.css"
import {AiOutlineSearch} from "react-icons/ai"
import "../fonts/helveltica nueue light/stylesheet.css"
function Topbar() {
    return (
        <div className="topbar">
            <ul className="tbar"  >
                <li className="tbar_item"  >Women</li>
                <li className="tbar_item"  >Men</li>
                <li className="tbar_item" >Kids</li>
                <li className="tbar_item" >Beauty</li>
                <li className="tbar_item" >Sport</li>
                <li>
                    <div className="search_container" >
                        <input type="text" className="search" placeholder="Type to search something" />
                        <AiOutlineSearch className="search_icon" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Topbar
