import React from 'react'
import resturant from '../images/resturant-page.png'
import resume from '../images/resume-app.png'
import memory from '../images/memory-game.png'

function WorkSection() {
  return (
    <div className='work-section'>
      <h1 className='work-header'>My Work</h1>
      <div className='work-container'>
        <div className='work-card'>
          <img src={resturant} alt='resturant page' className='screen-shots'></img>
        </div>
      </div>
    </div>
  )
}

export default WorkSection