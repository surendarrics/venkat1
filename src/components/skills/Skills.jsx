import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Animated from '../AnimatedLetters/Animated'
import Layout from '../layout/Layout'
import './skills.scss'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    
   useEffect(()=>{
     setTimeout(() => {
         setLetterClass('text-animate-hover')
    }, 3000);
}, [])
  return (
    <div>
        <Layout/>
        <div className="container skills-page">
       <div className="text-zone">
          
<h1>
    <Animated
    letterClass={letterClass}
    strArray={("Front-end").split("")} 
    idx={15}
    />
</h1>
<p>HTML, CSS, Javascript, React, BootStrap, StyledComponents,<br/> TailwindCss, MaterialUI, NPM, SASS.</p>

<h1>
    <Animated
    letterClass={letterClass}
    strArray={("Back-End").split("")} 
    idx={15}
    />
</h1>
<p>Nodejs, ExpressJS, MongoDb</p>

<h1>
    <Animated
    letterClass={letterClass}
    strArray={("Languages").split("")} 
    idx={15}
    />
</h1>
<p>Javascript, Python.</p>
       </div>
        </div>
<Loader type='pacman'/>
    </div>
  )
}

export default Skills