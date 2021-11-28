import React, { useEffect } from 'react'
import "../style/loader.css"
import "../fonts/devil-breeze/style.css"
import gsap from 'gsap'
import Marquee from 'react-fast-marquee'

function Loader() {
    useEffect(() => {
        gsap.to('.loader',{delay:4.5,ease:'ease',css:{display:"none"}})
        gsap.from('.loader_title',{opacity:0,duration:2,x:'50%',delay:2})
        gsap.from('.marque_container',{opacity:1,duration:2,})
        
    }, [])
    return (
        <div className="loader" >
            <div className="marque_container" >
                <Marquee speed="350" gradientWidth="0px" direction='left' >
                    <h1 className="marque_item "   >Lumiere</h1>
                </Marquee>
                <Marquee  speed="250" gradientWidth="0px"   direction='right' >
                    <h1 className="marque_item "  >Ombres</h1>
                </Marquee>
                <Marquee  speed="150" gradientWidth="0px"  direction='left' >
                    <h1 className="marque_item "  >Lumiere</h1>
                </Marquee>
                <Marquee  speed="200" gradientWidth="0px"  direction='left' >
                    <h1 className="marque_item "  >Ombres</h1>
                </Marquee>
                <Marquee  speed="350" gradientWidth="0px" direction='right' >
                    <h1 className="marque_item "   >Ombres</h1>
                </Marquee>
                <Marquee  speed="250" gradientWidth="0px"  direction='left'  >
                    <h1 className="marque_item " >Lumiere</h1>
                </Marquee>
                <Marquee  speed="200" gradientWidth="0px" direction='right'  >
                    <h1 className="marque_item "  >Ombres</h1>
                </Marquee>
                <Marquee  speed="300" gradientWidth="0px" direction='left' >
                    <h1 className="marque_item "   >Lumiere</h1>
                </Marquee>
                <Marquee  speed="250" gradientWidth="0px"  direction='right'  >
                    <h1 className="marque_item " >Ombres</h1>
                </Marquee>
                <Marquee  speed="350" gradientWidth="0px" direction='left' >
                    <h1 className="marque_item "   >Lumiere</h1>
                </Marquee>
                <Marquee  speed="200" gradientWidth="0px" direction='right' >
                    <h1 className="marque_item "   >Ombres</h1>
                </Marquee>
                <Marquee  speed="250" gradientWidth="0px"  direction='left' >
                    <h1 className="marque_item "  >Lumiere</h1>
                </Marquee>
            </div>
            <h1 className="loader_title " >Lumiere</h1>
        </div>
    )
}

export default Loader
