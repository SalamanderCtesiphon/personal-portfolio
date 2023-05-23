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
          <p className='description'>This is a fundamental e-commerce website that leverages the Context API for efficient state management. It is developed as a ReactJS application and hosted on the Firebase platform. The React Router library is employed to facilitate seamless page navigation.</p>
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
            <p className='description'>This application is a straightforward weather and forecast application developed using ReactJS. It effectively utilizes asynchronous JavaScript in conjunction with API fetch requests to retrieve weather data. Through the process of object deconstruction, the acquired data is elegantly presented on the page, ensuring a seamless and informative user experience.</p>
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
            <p className='description'>This application leverages the power of the Rapid API's open AI ChapGPT4 engine to provide concise summaries of news articles and webpages. The website itself was developed using Vite, a fast and efficient build tool, and seamlessly deployed on the reliable Firebase platform, ensuring optimal performance and accessibility.</p>
            <span className='app-links'>
              <a className='app-links' href='https://articlesummarizer-f0253.web.app/'><Icon path={mdiArrowTopRightBoldOutline} size={1} />LiveSite</a>
              <a className='app-links' href='https://github.com/SalamanderCtesiphon/open-ai-article-summarizer'><Icon path={mdiArrowTopRightBoldOutline} size={1} />GitHub Repo</a>
            </span>
          </div>
        </div>
        <div className='work-card'>
          <h2 className='card-title'>RESTURANT PAGE</h2>
          <img src={resturantPage} alt='resturant' className='image'></img>
          <div className='work-text'>
          <p className='description'>This single-page static informational website has been constructed exclusively using vanilla JavaScript. To enhance performance optimization and efficient asset management, webpack is employed during the build phase. By leveraging webpack, the website achieves seamless bundling and optimization of resources, resulting in an optimized and user-friendly browsing experience.</p>
          <span className='app-links'>
            <a className='app-links'href='https://resturant-page-bc51a.web.app/'><Icon path={mdiArrowTopRightBoldOutline} size={1} />LiveSite</a>
            <a className='app-links'href='https://github.com/SalamanderCtesiphon/resturant-page-project'><Icon path={mdiArrowTopRightBoldOutline} size={1} />GitHub Repo</a>
          </span>
        </div>
        </div>
        <div className='work-card'>
          <h2 className='card-title'>MEMORY GAME</h2>
          <img src={memoryGame} alt='memory game' className='image'></img>
          <div className='work-text'>
            <p className='description'>This application has been developed using ReactJS and serves as an engaging memory card game. The game mechanics involve reshuffling the cards after each selection, providing a refreshing challenge for players. Furthermore, the application keeps track of the number of correct selections made, and prominently displays an all-time high score for added motivation and competitiveness.</p>
            <span className='app-links'>
              <a className='app-links'href='https://salamanderctesiphon.github.io/memory-card-react-app/'><Icon path={mdiArrowTopRightBoldOutline} size={1} />LiveSite</a>
              <a className='app-links'href='https://github.com/SalamanderCtesiphon/memory-card-react-app'><Icon path={mdiArrowTopRightBoldOutline} size={1} />GitHub Repo</a>
            </span>
          </div>
        </div>
        <div className='work-card'>
          <h2 className='card-title'>RESUME APP</h2>
          <img src={resumeApp} alt='resume app' className='image'></img>
          <div className='work-text'>
            <p className='description'>This is a self-contained, single-page application that exemplifies the capabilities of conditional rendering through the utilization of the ReactJS library. Its purpose is to showcase the potential of dynamically displaying content based on specified conditions, providing a seamless and interactive user experience.</p>
            <span className='app-links'>
              <a className='app-links'href='https://salamanderctesiphon.github.io/resume-app/'><Icon path={mdiArrowTopRightBoldOutline} size={1} />LiveSite</a>
              <a className='app-links'href='https://github.com/SalamanderCtesiphon/resume-app'><Icon path={mdiArrowTopRightBoldOutline} size={1} />GitHub Repo</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkSection