import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Software0408 101212 Lagos Nigeria, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counnters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Term & Conditions</p>
          <p>Privacy Policy</p>
          <p>Conntact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Software0408 K12 182 Lagos Nigeria</p>
          <p>08034174125</p>
          <p>muhammadtoha2019@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2024 Software0408. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer