import React from 'react'
import "../style/acceuil.css"
import Navbar from '../components/Navbar';
import Slider from './Slider';
import Topbar from './Topbar';
import Arrivals from './Arrivals';
import Trend from './Trend';
import Newsletter from './Newsletter';
import Blog from './Blog';

function Acceuil() {
    return (
        <div className="acceuil" >
            
            <Navbar/>
            <Topbar/>
            <Slider/>
            <Arrivals/>
            <Trend/>
            <Blog/>
            <Newsletter/>
        </div>
    )
}

export default Acceuil
