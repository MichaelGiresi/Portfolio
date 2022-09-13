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
          <h1 className='fp-info1-title'>MATCHBOX STICKERS</h1>
          <h4 className='fp-info1-year'>2022</h4>
        </div>
        <div className='fp-info1-info'>
          <p className='fp-info1-info-p'>Matchbox Stickers is a limited quanity e-commerce website. <span id="mbs-info-span">Talented artists from around the world sell a limited quanity of their creations.</span></p>
          <div id="fp-info1-roles-container">
            <p className='fp-info1-info-roles'>MY ROLE<br /><strong>Development</strong></p>
            <p className='fp-info1-info-roles'>ALEX SEVERINO<br/><strong>Design</strong></p>
          </div>
        </div>
      </div>
      <div className='fp-showcase-container'>
        <div className='fp-showcase-1' id="fp-showcase-mbs-1"><a href='https://stupendous-puppy-0e318b.netlify.app' rel='noopener' target = '_blank' className='fp-showcase-button'>VISIT THE SITE</a></div>
        <div className='fp-showcase-2' id="fp-showcase-mbs-2"></div>
      </div>
      <div className='nav_separator-fp'></div>
      <div className='fp-info2-container'>
        <div className='fp-info2-title-container'>
          <h1 className='fp-info2-title'>ALGORYTHMIA</h1>
          <h4 className='fp-info2-year'>2022</h4>
        </div>
        <div className='fp-info2-info'>
          <p className='fp-info2-info-p'>Algorythmia is a brand focused e-commerce website.</p>
          <div id="fp-info2-roles-container">
            <p className='fp-info2-info-roles'>MY ROLE<br/><strong>Development</strong></p>
            <p className='fp-info2-info-roles'>ALEX SEVERINO<br/><strong>Design</strong></p>
          </div>
        </div>
      </div>
      <div className='fp-showcase-container'>
        <div className='fp-showcase-1' id="fp-showcase-algo-1"><a href='https://famous-dango-24aba4.netlify.app' rel='noopener' target = '_blank' className='fp-showcase-button'>VISIT THE SITE</a></div>
        <div className='fp-showcase-2' id="fp-showcase-algo-2"></div>
      </div>
    </div>
  )
}

export default FeaturedProjects

