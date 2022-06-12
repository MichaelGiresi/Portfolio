import React, {useState} from 'react'
import style from '../style.css'
import monogram from '../assets/monogram.svg'
import nav from '../scss/nav/nav.css'
import soundon from "../assets/soundon.wav"

const Nav = () => {

  const [sound, setSound] = useState(false)
  return (
    <div className=''>
        <div className='nav'>

        <div className='nav_sound' onClick={() => setSound(soundon)}>SOUND</div>
        
        <div className='nav_monogram'><img className='monogram' src={monogram}/></div>
        <div className='nav_contact'><a className="nav-contact-link" href={"mailto:michael@michaelgiresi.com"}>CONTACT</a></div>
        </div>
        <div className='nav_separator'></div>
        
    </div>
  )
}

export default Nav