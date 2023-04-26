import React from 'react'
import layeredWaves from "../images/layered-waves-haikei.svg"

function Hero() {
  return (
    <div className='hero section'>
      <div className='title-container'>
        <span className='hero-text' id='first-name'><h1>Shannon</h1></span>
        <span className='hero-text' id='last-name'><h1>Brookshire</h1></span>
        <span className='hero-text' id='title-one'><h1>Web</h1></span>
        <span className='hero-text' id='title-two'><h1>Developer</h1></span>
      </div>
      <img src={layeredWaves} alt='background' id='hero-background'></img>
    </div>
  )
}

export default Hero