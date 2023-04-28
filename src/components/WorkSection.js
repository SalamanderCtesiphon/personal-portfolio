import React from 'react'
import resturantPage from '../images/resturant-page.png'
import memoryGame from '../images/memory-game.png'
import resumeApp from '../images/resume-app.png'
import Icon from '@mdi/react';
import { mdiArrowTopRightBoldOutline } from '@mdi/js';



function WorkSection() {
  return (
    <div className='page' id='portfolio-anchor'>
      <h1 className='portfolio-title'>Portfolio</h1>
      <div className='work-section section'>
        <div className='work-card'>
          <h1 className='card-title'>Resturant Page</h1>
          <img src={resturantPage} alt='resturant' className='image'></img>
          <div className='work-text'>
          <p className='description'>This is a single-page static informational site build using only vanilla javascript. It uses webpack for the build phase for performance optimization.</p>
          <span className='app-links'>
            <a className='app-links'>LiveSite <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
            <a className='app-links'>GitHub Repo <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
          </span>
        </div>
        </div>
        <div className='work-card'>
          <h1 className='card-title'>Memory Game</h1>
          <img src={memoryGame} alt='memory game' className='image'></img>
          <div className='work-text'>
            <p className='description'>This app was built using reactJS. It's a simple memory card game. That reshuffles the cards after every selection.</p>
            <span className='app-links'>
              <a className='app-links'>LiveSite <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
              <a className='app-links'>GitHub Repo <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
            </span>
          </div>
        </div>
        <div className='work-card'>
          <h1 className='card-title'>Resume App</h1>
          <img src={resumeApp} alt='resume app' className='image'></img>
          <div className='work-text'>
            <p className='description'>Build your own resume quick and easy with this handy dandy miracle app. I promise you won't be disappointed.</p>
            <span className='app-links'>
              <a className='app-links'>LiveSite <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
              <a className='app-links'>GitHub Repo <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkSection