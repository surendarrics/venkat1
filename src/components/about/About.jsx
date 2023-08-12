import React, { useEffect, useState } from 'react'
import Animated from '../AnimatedLetters/Animated'
import './about.scss'
import '../AnimatedLetters/Animated.scss'
import Layout from '../layout/Layout'
import Sidebar from '../sidebar/Sidebar'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
     const AboutArray = "About me".split("")
     
    useEffect(()=>{
      setTimeout(() => {
          setLetterClass('text-animate-hover')
     }, 3000);
 }, [])
  return (
    <div className="app">
      <Layout/>
    <div className='container about-page'>
      
 <div className="text-zone">
  
<h1>
    <Animated 
    letterClass={letterClass}
    strArray={AboutArray}
    idx={15}
    />
</h1>
<p>I'm an Ambitious Web developer who's currently looking for <br/> an internship.</p>
<p>Quite confident person who's always curious and perpetually <br/> working on improving my skills everyday.</p>
<p> gym enthusiast, Football fanatic and tech-obsessed!!!</p>
 </div>
       </div>
<>
<div className="stage-cube-cont">
  <div className="cubeSpinner">
    <div className="face1">
      <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
    </div>

    <div className="face2">
      <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
    </div>

    <div className="face3" >
      <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
    </div>

    <div className="face4">
      <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
    </div>

    <div className="face5">
      <FontAwesomeIcon icon={faNodeJs} color="green" />
    </div>

    <div className="face6">
      <FontAwesomeIcon icon={faGitAlt} color="#EC"/>
    </div>
  </div>
</div>
<Loader type='pacman' />
</>
</div>

  )
}

export default About