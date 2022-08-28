import React from 'react'
import fp from '../scss/featured-projects/fp.css'

const FeaturedProjects = () => {
  return (
    <div className='fp-container'>
      <div className='fp-h1-container'>
        <h2 className="fp">FEATURED PROJECTS</h2>
      </div>
      <div className='nav_separator-fp'></div>
      <div className='fp-info1-container'>
        <div className='fp-info1-title-container'>
          <div className='fp-info1-title'>MATCHBOX STICKERS</div>
          <div className='fp-info1-year'>2022</div>
        </div>
        <div className='fp-info1-info'>
          <div className='fp-info1-info-p'>Matchbox Stickers is a limited quanity e-commerce website. Talented artists from around the world sell a limited quanity of their creations.</div>
          <div className='fp-info1-info-roles'>MY ROLE<br /><strong>Devlopment</strong><br/><br/>ALEX SEVERINO<br/><strong>Design</strong></div>
        </div>
      </div>
      {/* <div className='fp-year'>2022</div> */}
      <div className='fp-showcase-container'>
        <div className='fp-showcase-1-mbs'><a href='https://tranquil-druid-afa7cd.netlify.app/' rel='noopener' target = '_blank' className='fp-showcase-button'>VISIT THE SITE</a></div>
        <div className='fp-showcase-2-mbs'></div>
      </div>
      <div className='nav_separator-fp'></div>
      <div className='fp-info1-container'>
      <div className='fp-info1-title-container'>
          <div className='fp-info1-title'>ALGORYTHMIA</div>
          <div className='fp-info1-year'>2022</div>
        </div>
        <div className='fp-info1-info'>
          <div className='fp-info1-info-p'>Algorythmia is a brand focused e-commerce website.</div>
          <div className='fp-info1-info-roles'>MY ROLE<br/> <strong>Development</strong><br/><br/>ALEX SEVERINO<br/><strong>Design</strong></div>
        </div>
      </div>
      {/* <div className='fp-year'>2022</div> */}
      <div className='fp-showcase-container'>
        <div className='fp-showcase-1-algo'><a href='https://vocal-fox-15be3e.netlify.app/' rel='noopener' target = '_blank' className='fp-showcase-button'>VISIT THE SITE</a></div>
        <div className='fp-showcase-2-algo'></div>
      </div>
    </div>
  )
}


{/* <button className=" w-[60%] h-[30px] font-['Lato'] bg-[#67182e] text-white rounded">VISIT THE SITE</button> */}
export default FeaturedProjects
