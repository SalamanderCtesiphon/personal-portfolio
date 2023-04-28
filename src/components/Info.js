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
import linux from '../icons/linux-original.svg'
import node from '../icons/nodejs-plain.svg'
import npm from '../icons/npm-original-wordmark.svg'
import reaction from '../icons/react-original.svg'
import webpacker from '../icons/webpack-original.svg'

function Info() {
  return (
    <div className='info-section'> 
      <h1 className='info-title'>Introduction</h1>
      <p className='paragraph'>Hi! I'm Shannon</p>
      <p className='paragraph'>Welcome to my portfolio! I am an enthusiastic and dedicated entry-level web developer with a passion for creating dynamic and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I am excited to apply my skills to bring innovative ideas to life. As a detail-oriented individual, I thrive in fast-paced environments and enjoy collaborating with cross-functional teams to deliver high-quality solutions. I am constantly learning and staying up-to-date with the latest web development technologies and trends to ensure I am providing cutting-edge solutions.</p>
      <h5 className='paragraph'>A few of the technologies that I have worked with (so far) :</h5>
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