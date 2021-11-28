import React from 'react'
import {BsCart} from "react-icons/bs"
import {IoMdHeartEmpty} from "react-icons/io"
function Box() {
    return (
        <div className="arrivals_box" >
                <img alt="box_img" className="box_img" src={require('../assets/img1.jpeg').default } />
                <div className="quick_details" >Quick details</div>
                <h3 className="box_header"  >Lab-Grown Stud Earrings </h3>
                <h3 className="box_price"  >$180</h3>
                <div className="box_icons">
                                <div className="box_icon" >
                                    <BsCart/>
                                </div>
                                <div className="box_icon" >
                                    <IoMdHeartEmpty/>
                                </div>
                 </div>
        </div>
    )
}

export default Box
