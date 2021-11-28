import React from 'react'
import "../style/arrivals.css"
import Box from './Box'

function Arrivals() {
    return (
        <div className="arrivals">
            <h2 className="arrivals_header" >New Arrivals</h2>
            <div className="arrivals_container" >
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
            </div>
        </div>
    )
}

export default Arrivals
