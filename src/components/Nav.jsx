import style from '../style.css'
import monogram from '../assets/monogram.svg'
import nav from '../scss/nav/nav.css'


const Nav = () => {
  return (
    <div>
        <div className='nav'>
          <a className='nav_linkedin'rel="noreferrer" target = '_blank' href='https://www.linkedin.com/in/michael-giresi-4b678422a/'>LINKEDIN</a>
          <div className='nav_monogram'><img className='monogram' src={monogram}/></div>
          <div className='nav_contact'><a className="nav-contact-link" href={"mailto:michael@michaelgiresi.com"}>CONTACT</a></div>
        </div>
        <div className='nav_separator'></div>
    </div>
  )
}
export default Nav