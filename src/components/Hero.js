import React from 'react'
import layeredWaves from "../images/layered-waves-haikei.svg"

function Hero() {
  return (
    <div className='hero section'>
      <img src={layeredWaves} alt='background' id='hero-background'></img>
    </div>
  )
}

export default Hero