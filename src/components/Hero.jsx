import React, { useEffect, useRef } from 'react'
import trianglegrid from '../assets/trianglegrid.svg'
import hero from '../scss/hero/hero.css'
import { gsap } from 'gsap'
import selfie from "../assets/selfie.jpeg"


const Hero = () => {
  const devRef = useRef();
  const feRef = useRef();
  const hthRef = useRef();
  const htRef = useRef();



  // Text Animations
  useEffect(() => {
    gsap.from(feRef.current, {opacity:0, y:-15, duration:1, delay:.3})
    gsap.from(devRef.current, { opacity: 0, y: -15, duration: 1, delay:.3})
    gsap.from(hthRef.current, {opacity:0, y:-10, duration:1.7, delay:.8})
    gsap.from(htRef.current, {opacity:0, y:-10, duration:1.7, delay:1})
  })


  // Image Animation
  useEffect(() => {
  const items = document.querySelectorAll('.MG_span')

    items.forEach((el) => {
      const image = el.querySelector('.img1')
      
      el.addEventListener('mouseenter', (e) => {
        gsap.to(image, { autoAlpha: 1 })
      })
      
       el.addEventListener('mouseleave', (e) => {
        gsap.to(image, { autoAlpha: 0 })
      })
      
      el.addEventListener('mousemove', (e) => {
        gsap.set(image, { x: e.offsetX - 280, y: e.offsetY - 260})
      })
    })
  })

  
  
  
  return (
    <div className='hero_main'>
      <div className='hero_container'>
        <div className='hero_frontend' ref={feRef}>FRONT-END</div>
        <div className='hero_developer' ref={devRef}>DEVELOPER</div>
      </div>
      <div className='hero_triangles_text'>
        <img className='hero_triangles' src={trianglegrid}/>
        <div className='hero_text_container'>
          <div className='hero_text_heading' ref={hthRef}>Nice to meet you, I'm <span className='MG_span'><img className="img1" src={selfie}/>Michael Giresi</span></div>
          <div className='hero_text' ref={htRef}>
          As an orchestral trumpet player, I was unable to perform during the pandemic. 
          I have a history of interest in computers, so I dove head first into the world 
          of programing. Also, I have years of field management experience in the construction 
          industry, primarily in Manhattan and Long Island. These diverse set of skills help me 
          find creative solutions to problems. </div>
        </div>
      </div>
    </div>
  )
}

export default Hero