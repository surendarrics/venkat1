import React, { useRef } from 'react'
import './logo.scss'
import Logos from '../../../assets/images/karuppu thangam.png'
import { useEffect } from 'react'
import { faGasPump } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap-trial'

const Logo = () => {
 const bgRef = useRef()
 const outlineLogoRef = useRef()
 const solidLogoRef = useRef()

useEffect(()=>{


 gsap.fromTo(
  solidLogoRef.current,
  {
opacity:0,
  },
  {
    opacity: 1,
    delay: 3 ,
    duration: 3,
  }
 )

}, [])

  return (
    <div className='logo-container' ref={bgRef}>
        <img ref={solidLogoRef} className='solid-image' src={Logos}/>
    
    </div>
  )
}

export default Logo