import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_img from "../Assets/hero_image.png"
function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="hand-image"/>
                </div>
                <p>Collections</p>
                <p>for every one</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest collections</div>
                <img src={arrow_icon} />
            </div>
        </div>

        <div className="hero-right">
            <img src={hero_img} />
        </div>
      
    </div>
  )
}

export default Hero
