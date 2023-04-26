import React from 'react'
import resturantPage from '../images/resturant-page.png'
import memoryGame from '../images/memory-game.png'
import resumeApp from '../images/resume-app.png'

function WorkSection() {
  return (
    <div className='work-section section'>
      <div className='work-card'>
        <img src={resturantPage} alt='resturant'></img>
      </div>
      <div className='work-card'>
        <img src={memoryGame} alt='memory game'></img>
      </div>
      <div className='work-card'>
        <img src={resumeApp} alt='resume app'></img>
      </div>
    </div>
  )
}

export default WorkSection