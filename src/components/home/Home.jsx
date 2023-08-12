import React, {useState} from 'react'
import './home.scss'
import logo from '../../assets/images/karuppu thangam.png'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import Animated from '../AnimatedLetters/Animated'
import { useEffect } from 'react'
import Logo from './logo/Logo'
import Sidebar from '../sidebar/Sidebar'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "enkatesh".split("")
    
    const jobArray = "AI Engineer".split("")

    useEffect(()=>{
         setTimeout(() => {
             setLetterClass('text-animate-hover')
        }, 4000);
    }, [])
  return (
    
    <div className="app">
     <Layout />
     <>
    <div className='container home-page'>
     
   <div className="text-zone">
    <h1>
       <span className={letterClass}>H</span>
       <span className={`${letterClass} _12`}>i, </span>
       <br/>
       <span className={`${letterClass} _13`}>I'</span>
       <span className={`${letterClass} _14`}>m   </span>
        <span style={{color:"#ffd700", fontFamily:"Coolvetica", width:"32px", height:"auto", animation:"rotateIn 1s linear both",display:"inline-block", animationDelay:"1.4s", gap:"2px", marginLeft:"15px"}}> V</span> 
        <Animated letterClass={letterClass} strArray={nameArray} idx={15}/>
        
        
    
        <br/>
        <Animated letterClass={letterClass} strArray={jobArray} idx={22}/>
    </h1>
    <h2>Python Developer</h2>
    <Link to="/contact" className="flat-button">CONTACT ME</Link>

    
  
   
   </div>
   <Logo/>
    </div>
    <Loader type="pacman"/>
    </>
    </div>
  )
}

export default Home
