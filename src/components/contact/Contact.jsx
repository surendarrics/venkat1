import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import Animated from '../AnimatedLetters/Animated'
import Layout from '../layout/Layout'
import './contact.scss'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const AboutArray = "About me".split("")
    const  [done, setDone] = useState(false)
    
   useEffect(()=>{
     setTimeout(() => {
         setLetterClass('text-animate-hover')
    }, 3000);
}, [])

//emailJS
const form = useRef();

const sendEmail = (e) => {
  

  emailjs.sendForm('service_2cb7ijp', 'template_ifvf70c', form.current, 'dxR4uzZJdXp-6_eGw')
    .then((result) => {
        console.log(result.text);
        setDone(true)
        form.reset()
    }, (error) => {
        console.log(error.text);
    });
};




  return (
    <>
    <div className="app">
        <Layout/>
    <div className='container contact-page'>
      <div className="text-zone">
        <h1>
           
            <Animated strArray={("Get in Touch").split("")} letterClass={letterClass}  idx={15}/>
        </h1>

        <p>
  Feel free to drop an email or contact me on any of those 
  <br/>social medias provided.<br/> 
  I'm always intrested in new oppurtunities.
        </p>
        <div className="contact-form">
            <form  ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
<input type="text" name='user_name' placeholder='Name' required/>
                        </li>

                        <li className='half'>
<input type="email" name='user_email' placeholder='Email' required/>
                        </li>
                        <li>
                            <input placeholder='Subject' type="text" name='subject' required/>
                        </li>

                        <li>
                            <textarea placeholder='Message' name='message' required>

                            </textarea>
                        </li>

                </ul>
                <input className='flat-button' type="submit" value="Send" placeholder='Your Message'/>
                <span>{done && "Thanks for contacting me" }</span>
            
            </form>
        </div>
        
      </div>
    </div>
    <Loader type='pacman'/>
    
    </div>
    </>
  )
}

export default Contact