import React from 'react'
import bable from '../icons/babel-original.svg'
import bash from '../icons/bash-original.svg'
import css from '../icons/css3-original-wordmark.svg'
import firebase from '../icons/firebase-plain.svg'
import firefox from '../icons/firefox-original.svg'
import gimp from '../icons/gimp-original.svg'
import git from '../icons/git-original.svg'
import github from '../icons/github-original-wordmark.svg'
import html from '../icons/html5-original-wordmark.svg'
import javascript from '../icons/javascript-original.svg'
import jest from '../icons/jest-plain.svg'
import linked from '../icons/linkedin-original.svg'
import linux from '../icons/linux-original.svg'
import node from '../icons/nodejs-plain.svg'
import npm from '../icons/npm-original-wordmark.svg'
import reaction from '../icons/react-original.svg'
import webpacker from '../icons/webpack-original.svg'

function Info() {
  return (
    <div className='info-section'> 
      <h1>Introduction</h1>
      <h3>Hi! I'm Shannon</h3>
      <p>I am a self-taught front-end web developer. I learned my skills by completeing the Odin Project, an on-line open-sourced curriculum curated by professinal web developers.</p>
      <p>It required a signficant amout of grit and determination to complete the course. Along the way, I learned many valuable skills and concepts which I feel have prepared me for a carreer in web developement.</p>
      <p>I have also developed a strong work ethic and a growing curiosity that motivates me tol learn more and improve my skills.</p>
      <h5>A few of the subjects that I have worked with:</h5>
      <div className='icon-container'>
        <img src={bable} alt='babel icon' className='icon-img'></img>
        <img src={bash} alt='bash icon' className='icon-img'></img>
        <img src={css} alt='css icon' className='icon-img'></img>
        <img src={firebase} alt='firebase icon' className='icon-img'></img>
        <img src={firefox} alt='babel icon' className='icon-img'></img>
        <img src={gimp} alt='gimp icon' className='icon-img'></img>
        <img src={git} alt='babel icon' className='icon-img' ></img>
        <img src={github} alt='bash icon' className='icon-img'id='git-icon'></img>
        <img src={html} alt='css icon' className='icon-img'></img>
        <img src={javascript} alt='firebase icon' className='icon-img'></img>
        <img src={jest} alt='babel icon' className='icon-img'></img>
        <img src={linux} alt='gimp icon' className='icon-img'></img>
        <img src={node} alt='css icon' className='icon-img'></img>
        <img src={npm} alt='firebase icon' className='icon-img'></img>
        <img src={reaction} alt='babel icon' className='icon-img'></img>
        <img src={webpacker} alt='gimp icon' className='icon-img'></img>
      </div>
    </div>
  )
}

export default Info