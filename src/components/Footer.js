import React from 'react'
import { ContactUs } from './ContactUs'
import linked from '../icons/linkedin-original.svg'
import twit from '../icons/twitter-original.svg'

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className='footer' id='footer-anchor'> 
      <h1 className='paragraph'>Contact</h1>
      <p className='paragraph'>I am currently looking for opportunities, if you have a question or just want to chat, feel free to send me a message and I will get back to you!</p>
      <div className='form-box'>
        <div className='icon-holder'>
          <img src={linked} alt='linked in' className='icon-img'></img>
          <img src={twit} alt='twitter' className='icon-img'></img>
        </div>
        <ContactUs />
      </div>
      <div className='footer-line'>
        <a href="https://github.com/SalamanderCtesiphon/" className="footer-link">Seamus Quixiote&#169;</a> 
        <p>The Odin Project{date}</p>
      </div>
    </div>
  )
}

export default Footer