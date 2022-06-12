import React from 'react'
import fp from '../scss/featured-projects/fp.css'
import sunset from '../assets/sunset.jpeg'
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
          <div className='fp-info1-info-p'>Beae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste natus error sit voluptatem.  <span className='fp-info1-info-p-span'>READ MORE</span></div>
          <div className='fp-info1-info-roles'>MY ROLE<br /><strong>Devlopment</strong><br/><br/>ALEX SEVERINO<br/><strong>DESIGN</strong></div>
        </div>
      </div>
      {/* <div className='fp-year'>2022</div> */}
      <div className='fp-showcase-container'>
        <div className='fp-showcase-1'><button className='fp-showcase-button'>VISIT THE SITE</button></div>
        <div className='fp-showcase-2'></div>
      </div>
      <div className='nav_separator-fp'></div>
      <div className='fp-info1-container'>
      <div className='fp-info1-title-container'>
          <div className='fp-info1-title'>GOOD MOODS</div>
          <div className='fp-info1-year'>2022</div>
        </div>
        <div className='fp-info1-info'>
          <div className='fp-info1-info-p'>Beae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste natus error sit voluptatem.  <span className='fp-info1-info-p-span'>READ MORE</span></div>
          <div className='fp-info1-info-roles'>MY ROLE<br/> <strong>Development</strong><br/><br/>ALEX SEVERINO<br/><strong>DESIGN</strong></div>
        </div>
      </div>
      {/* <div className='fp-year'>2022</div> */}
      <div className='fp-showcase-container'>
        <div className='fp-showcase-1'><button className='fp-showcase-button'>VISIT THE SITE</button></div>
        <div className='fp-showcase-2'></div>
      </div>
    </div>
  )
}


{/* <button className=" w-[60%] h-[30px] font-['Lato'] bg-[#67182e] text-white rounded">VISIT THE SITE</button> */}
export default FeaturedProjects

