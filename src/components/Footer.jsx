import React from 'react'
import footer from '../scss/footer/footer.css'
import trianglebackground from '../assets/trianglebackground.svg'
const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='footer-wrapper'>
      <img className='footer-tb' src={trianglebackground}/>
      </div>

      <div className='footer-text-link'>
        <h1 className='footer-text'>Want to start a project?</h1>
        <br/>
        <a className='footer-text-talk-link' 
        href={"mailto:michael@michaelgiresi.com"}>Let's Talk</a></div>
    </div>
    <div className='footer-divider'></div>
    <div className='footer-bottom-container'>
      <div className='footer-linkedin'> LINKED IN</div>
      <div className='footer-arrmg'>ALL RIGHTS RESERVED - MICHAEL GIRESI</div>
    </div>
    </div>
  )
}

export default Footer


// width="1333" height="450" viewBox="0 0 1333 450"