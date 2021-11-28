import React , {useState} from 'react'
import { AiOutlineLeft , AiOutlineRight } from 'react-icons/ai'
import  '../style/slider.css'
function Slider() {
    const [position, setposition] = useState(0)
    const images = [
        {
            "image":require('../assets/14.jpg').default
        },
        {
            "image":require('../assets/14.jpg').default

        }
    ]

    const leftclick=()=>{
        (position===0)?setposition(images.length-1):setposition(position-1)
    }
    const rightclick=()=>{
        (position===images.length-1)?setposition(0):setposition(position+1)
    }
    return (
        <div className="slider">
            <AiOutlineLeft className="slider_icon" onClick={leftclick}  />
            <div className="slider_content" >
                {/* <img src={images[position].image} className="slider_img" /> */}
                
            </div>
            <AiOutlineRight className="slider_icon" onClick={rightclick} />
        </div>
    )
}

export default Slider
