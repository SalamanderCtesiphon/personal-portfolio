import React from 'react'
import terry from "../images/terry davis big.jpg"
import github from '../icons/github-original-wordmark.svg'
import linked from '../icons/linkedin-original.svg'
import twit from '../icons/twitter-original.svg'

function Header() {
  return (
    <div>
      <div className='banner'>
        
        </div>
        <div className='photo-container'>
          <img id='me' src={terry} alt='me'></img>
        </div>
        <div className='name'>Shannon Brookshire</div>
        <h1 className='intro'>About me</h1>
        <p className='intro-para'>Welcome to my profile! I am an enthusiastic and dedicated entry-level web developer with a passion for creating dynamic and user-friendly websites. With a solid foundation in HTML, CSS and JavaScript - not to mention ReactJS and Firebase, I am excited to apply my skills to bring innovative ideas to life. As a detail-oriented individual, I thrive in fast-paced environments and enjoy collaborating with cross-functional teams to deliver high-quality solutions. I am constantly learning and staying up-to-date with the latest web development technologies and trends to ensure I am providing cutting-edge solutions. </p>
        <div className='icon-container'>
          <a href='https://www.linkedin.com/in/shannon-brookshire-817577265/' ><img className='icons' alt='linked in link'src={linked}></img></a>
          <a href="https://github.com/SalamanderCtesiphon/" ><img className='icons' alt='git hub link' src={github}></img></a>
          <a href='https://twitter.com/Shannon99535365'><img className='icons' alt='twitter link' src={twit} ></img></a>
        </div>
    </div>
  )
}

export default Header