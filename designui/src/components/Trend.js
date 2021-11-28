import React from 'react'
import "../style/trend.css"
import Box from './Box'
function Trend() {
    return (
        <div className="trend">
            <h2 className="trend_header" >New trend</h2>
            <div className="trend_container" >
                <div className=" trend_content row " >
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                    <Box/>
                </div>
  
            </div>
        </div>
    )
}

export default Trend
