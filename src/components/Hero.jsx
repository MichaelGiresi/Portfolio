import React, { useEffect, useRef } from 'react'
import trianglegrid from '../assets/trianglegrid.svg'
import hero from '../scss/hero/hero.css'
import { gsap } from 'gsap'
import arrow from "../assets/arrow.svg"
import selfie from "../assets/selfie.jpeg"


const Hero = () => {
  const devRef = useRef();
  const feRef = useRef();
  const withRef = useRef();
  const aRef = useRef();
  const passionRef = useRef();
  const forRef = useRef();
  const soundRef = useRef();
  const designRef = useRef();
  const hthRef = useRef();
  const htRef = useRef();

  useEffect(() => {
    gsap.from(feRef.current, {opacity:0, y:-15, duration:1, delay:.3})
  })

  useEffect(() => {
    gsap.from(devRef.current, { opacity: 0, y: -15, duration: 1, delay:.3})
  })

  useEffect(() => {
    gsap.from(withRef.current, { opacity: 0, y: -7, duration: .6, delay:2 })
  })
  useEffect(() => {
    gsap.from(aRef.current, { opacity: 0, y: -7, duration: .6, delay:2.2 })
  })
  useEffect(() => {
    gsap.from(passionRef.current, { opacity: 0, y: -7, duration: .6, delay:2.5 })
  })
  useEffect(() => {
    gsap.from(forRef.current, { opacity: 0, y: -7, duration: .6, delay:3 })
  })
  useEffect(() => {
    gsap.from(soundRef.current, { opacity: 0, y: -7, duration: .6, delay:3.3 })
  })
  useEffect(() => {
    gsap.from(designRef.current, { opacity: 0, y: -7, duration: .6, delay:3.7 })
  })
  useEffect(() => {
    gsap.from(hthRef.current, {opacity:0, y:-10, duration:1.7, delay:.8})
  })
  useEffect(() => {
    gsap.from(htRef.current, {opacity:0, y:-10, duration:1.7, delay:1})
  })
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
        gsap.set(image, { x: e.offsetX - 200})
      })
    })
  })

  
  
  
  return (
    <div className='hero_main'>
      <div className='hero_cta'>
        <div className='hero_frontend' ref={feRef}>FRONT-END</div>
        <div className='hero_developer' ref={devRef}>DEVELOPER</div>
        {/* <div className='hero_sounddesign' ><span className='hero_sounddesign_right_margin' ref={withRef}>With</span><span className='hero_sounddesign_right_margin' ref={aRef}>a</span><span className='hero_sounddesign_right_margin' ref={passionRef}>passion</span><span className='hero_sounddesign_right_margin' ref={forRef}>for</span><span className='hero_sounddesign_right_margin' ref={soundRef}>sound</span> <span className='hero_sounddesign_right_margin' ref={designRef}>design</span></div> */}
      </div>
      <div className='hero_triangles_text'>
        
       <img className='ht' src={trianglegrid}/>
        <div className='hero_text_container'>
          <div className='hero_text_heading' ref={hthRef}>Nice to meet you, I'm <span className='MG_span'><img className="img1" src={selfie}/>Michael Giresi</span></div>
          <div className='hero_text' ref={htRef}>I’ve lived in New York my whole life, but the unexplainable guides me. New experiences, places, people and events. Towards tragedies and comedies, drama and mystery. Often repeated, but sometimes new, my body leaps with excitement at the thought. The thought of the unexplainable, explained through the teachings of a foreign moment. So I search, compass ready, guiding me towards the unknown. </div>
          <div className='hero_text-last'>Lorem ipsum dolor sit amet. Itaque facere, excepturi exercitationem porro qui fuga! Voluptate, accusamus, eos esse laborum sunt minima obcaecati incidunt architecto officia illum quam placeat asperiores dicta repudiandae, deleniti sapiente id saepe commodi! Aliquid laudantium quod odit perferendis ea iure facilis. Expedita, explicabo? Unde, accusamus reprehenderit.</div>
        </div>
      </div>
    </div>
  )
}

export default Hero