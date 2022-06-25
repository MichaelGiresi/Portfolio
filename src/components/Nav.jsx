import React, {useState} from 'react'
import style from '../style.css'
import monogram from '../assets/monogram.svg'
import nav from '../scss/nav/nav.css'
import { useEffect } from 'react'
import outdoorsbirds from '../assets/outdoorsbirds.wav'
import soundoff from '../assets/soundoff.wav'
import soundon from '../assets/soundon.wav'
const Nav = () => {

  const [sound, setSound] = useState(false)


  useEffect(() => {

    console.log(sound)
    
  },[sound])
    const soundToggle = () => {
      const audioOff = new Audio (soundoff)
      const audioOn = new Audio (soundon)
      const soundId = document.getElementById('soundButton')
      const start = () => {
        audioOn.play()
      }
      const stop = () => {
        audioOff.play()
      }
      
      if(sound) {
        
        setSound(false)
        soundId.classList.remove('soundOn')
        stop()
        
        
        
        
      } 
      
      if(!sound){
        setSound(true)
        soundId.classList.add('soundOn')
        start()
      }
    }
    
    

  return (
    <div className=''>
        <div className='nav'>

        <div id="soundButton" className='nav_sound' onClick={() => soundToggle()}>SOUND</div>
        
        <div className='nav_monogram'><img className='monogram' src={monogram}/></div>
        <div className='nav_contact'><a className="nav-contact-link" href={"mailto:michael@michaelgiresi.com"}>CONTACT</a></div>
        </div>
        <div className='nav_separator'></div>
        
    </div>
  )
}

export default Nav