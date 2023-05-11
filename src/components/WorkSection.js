import React from 'react'
import resturantPage from '../images/resturant-page.png'
import memoryGame from '../images/memory-game.png'
import resumeApp from '../images/resume-app.png'
import Icon from '@mdi/react';
import { mdiArrowTopRightBoldOutline } from '@mdi/js';
import fasionBoutique from '../images/fashion-boutique.png'
import weatherApp from '../images/weather-app.png'
import openAi from "../images/open-ai-sum.png"



function WorkSection() {
  return (
    <div className='page' id='portfolio-anchor'>
      <h1 className='portfolio-title'>Portfolio</h1>
      <div className='work-section section'>
        <div className='work-card'>
          <h2 className='card-title'>E COMMERCE WEBSITE</h2>
          <img src={fasionBoutique} alt='resturant' className='image'></img>
          <div className='work-text'>
          <p className='description'>This is a basic e commerce website. That utilizes the context api for state management. It is a ReactJS application. Hosted on firebase.</p>
          <span className='app-links'>
            <a className='app-links' href='https://e-commerce-clothing-store.web.app/'><Icon path={mdiArrowTopRightBoldOutline} size={1} />LiveSite</a>
            <a className='app-links' href='https://github.com/SalamanderCtesiphon/fashion-boutique'><Icon path={mdiArrowTopRightBoldOutline} size={1} />GitHub Repo</a>
          </span>
        </div>
        </div>
        <div className='work-card'>
          <h2 className='card-title'>WEATHER APP</h2>
          <img src={weatherApp} alt='memory game' className='image'></img>
          <div className='work-text'>
            <p className='description'>A simple weather and forcast application built with ReactJS. It uses asyynchronous javascript with api fetch requests to acquire the weather object.</p>
            <span className='app-links'>
              <a className='app-links' href='https://weather-app-f672a.web.app/'><Icon path={mdiArrowTopRightBoldOutline} size={1} />LiveSite</a>
              <a className='app-links' href='https://github.com/SalamanderCtesiphon/responsive-weather-app'><Icon path={mdiArrowTopRightBoldOutline} size={1} />GitHub Repo</a>
            </span>
          </div>
        </div>
        <div className='work-card'>
          <h2 className='card-title'>ARTICLE SUMMARIZER</h2>
          <img src={openAi} alt='resume app' className='image'></img>
          <div className='work-text'>
            <p className='description'>This application utilizes the Rapid API open AI ChapGPT4 engine to summarize news article and webpages. The site was built using Vite and deployed to firebase hosting.</p>
            <span className='app-links'>
              <a className='app-links' href='https://articlesummarizer-f0253.web.app/'><Icon path={mdiArrowTopRightBoldOutline} size={1} />LiveSite</a>
              <a className='app-links' href='https://github.com/SalamanderCtesiphon/open-ai-article-summarizer'><Icon path={mdiArrowTopRightBoldOutline} size={1} />GitHub Repo</a>
            </span>
          </div>
        </div>
        <div className='work-card'>
          <h1 className='card-title'>Resturant Page</h1>
          <img src={resturantPage} alt='resturant' className='image'></img>
          <div className='work-text'>
          <p className='description'>This is a single-page static informational site build using only vanilla javascript. It uses webpack for the build phase for performance optimization.</p>
          <span className='app-links'>
            <a className='app-links'href='https://github.com/SalamanderCtesiphon/resume-app'>LiveSite <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
            <a className='app-links'href='https://github.com/SalamanderCtesiphon/resume-app'>GitHub Repo <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
          </span>
        </div>
        </div>
        <div className='work-card'>
          <h1 className='card-title'>Memory Game</h1>
          <img src={memoryGame} alt='memory game' className='image'></img>
          <div className='work-text'>
            <p className='description'>This app was built using reactJS. It's a simple memory card game. That reshuffles the cards after every selection.</p>
            <span className='app-links'>
              <a className='app-links'href='https://github.com/SalamanderCtesiphon/resume-app'>LiveSite <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
              <a className='app-links'href='https://github.com/SalamanderCtesiphon/resume-app'>GitHub Repo <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
            </span>
          </div>
        </div>
        <div className='work-card'>
          <h1 className='card-title'>Resume App</h1>
          <img src={resumeApp} alt='resume app' className='image'></img>
          <div className='work-text'>
            <p className='description'>Build your own resume quick and easy with this handy dandy miracle app. I promise you won't be disappointed.</p>
            <span className='app-links'>
              <a className='app-links'href='https://github.com/SalamanderCtesiphon/resume-app'>LiveSite <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
              <a className='app-links'href='https://github.com/SalamanderCtesiphon/resume-app'>GitHub Repo <Icon path={mdiArrowTopRightBoldOutline} size={1} /></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkSection