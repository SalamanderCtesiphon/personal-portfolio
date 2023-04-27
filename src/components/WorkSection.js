import React from 'react'
import resturantPage from '../images/resturant-page.png'
import memoryGame from '../images/memory-game.png'
import resumeApp from '../images/resume-app.png'

function WorkSection() {
  return (
    <div className='page' id='portfolio-anchor'>
      <h1 className='portfolio-title'>Portfolio</h1>
      <div className='work-section section'>
        <div className='work-card'>
          <h1 className='card-title'>Resturant Page</h1>
          <img src={resturantPage} alt='resturant' className='image'></img>
          <div className='work-text'>This is a link to the page</div>
        </div>
        <div className='work-card'>
          <h1 className='card-title'>Memory Game</h1>
          <img src={memoryGame} alt='memory game' className='image'></img>
          <div className='work-text'>This is a link to the page</div>
        </div>
        <div className='work-card'>
          <h1 className='card-title'>Resume App</h1>
          <img src={resumeApp} alt='resume app' className='image'></img>
          <div className='work-text'>This is a link to the page</div>
        </div>
      </div>
    </div>
  )
}

export default WorkSection