
import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import LogoS from '../../assets/images/karuppu thangam.png'
import {faEnvelope, faHome, faUser, faBars, faClose, faCogs, faTasks} from '@fortawesome/free-solid-svg-icons'
import{faGithub, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
const Sidebar = () => {
const [showNav, setShowNav] = useState(false)

  return (
    <div className='nav-bar'>
<Link className='logo' to='/'>
    
    <img src={LogoS} alt="logo"/>

     
   
</Link>

<nav className={showNav ? 'mobile-show': ''}>

    <NavLink exact="true" activeclassname="active" to="/">
    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
    </NavLink>
    <FontAwesomeIcon icon={faClose} color="#ffd700" size='3x' className='close-icon' onClick={()=> setShowNav(false)}/>
    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
    </NavLink>

    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
    </NavLink>

    <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
    <FontAwesomeIcon icon={faCogs} color="#4d4d4e"/>
    </NavLink>

    {/* <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
    <FontAwesomeIcon icon={faTasks} color="#4d4d4e"/>
    </NavLink> */}
</nav>
<ul className={showNav ? 'mobile-show': ''}>

    <li>
        <a target="blank" rel="noreferrer" href="https://www.linkedin.com/in/surendarrics-%E2%99%AA-1b4199218">
            <FontAwesomeIcon  icon={faLinkedin} color='#4d4d4e'/>
        </a>
        
    </li>
    <li>
        <a target="blank" rel="noreferrer" href="https://www.github.com/surendarrics">
            <FontAwesomeIcon  icon={faGithub} color='#4d4d4e'/>
        </a>
    </li>
    <li>
        <a target="blank" rel="noreferrer" href="https://www.instagram.com/surendarrics">
            <FontAwesomeIcon  icon={faInstagram} color='#4d4d4e'/>
        </a>
    </li>
    <li>
        <a target="blank" rel="noreferrer" href="https://www.twitter.com/surendarrics">
            <FontAwesomeIcon  icon={faTwitter} color='#4d4d4e'/>
        </a>
    </li>
</ul>
<FontAwesomeIcon icon={faBars} color="#ffd700" size='3x' className='hamburger-icon' onClick={()=> setShowNav(true)}/>

    </div>
  )
}

export default Sidebar