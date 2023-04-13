import React from 'react'
import cs from '../scss/current-skill/cs.css'

const CurrentSkill = () => {
  return (
    <div className='cs'>
      <h2 className='mp-more-projects'>CURRENT SKILLS</h2>
      <div className='mp-divider'></div>
      <div className='cs-container'>
        <div className='cs-wrapper'>
          <h3 className='cs-h3'>JAVA</h3>
          <div className='cs-divider'></div>
          <h3 className='cs-h3'>SPRING BOOT & REST</h3>
          <div className='cs-divider'></div>
          <h3 className='cs-h3'>MYSQL</h3>
          <div className='cs-divider'></div>
          <h3 className='cs-h3'>JAVASCRIPT & TYPESCRIPT</h3>
          <div className='cs-divider'></div>
          <h3 className='cs-h3'>HTML, SCSS, TAILWIND</h3>
          <div className='cs-divider'></div>
        </div>
      </div>
    </div>
  )
}

export default CurrentSkill