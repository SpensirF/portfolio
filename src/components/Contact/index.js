import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()



    useEffect (()=> {
        setTimeout(() => {
           setLetterClass('text-animate-hover')
       }, 3000)
   }, [])

   const sendEmail =(e) => {
    e.preventDefault()

    emailjs
        .sendForm(
            'service_eydlyfs',
            'template_71ssnhb',
             refForm.current,
            'Ld2XyYzUyGP52oMl2'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('failed to send the message, Please try again')
            }
        )
   }
    
    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                I am interested in freelance opportunities - especially on ambitious
                or large projects. However, if you have any other requests or
                questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" requied />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" requied />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Spencer Fields
                <br/>
                California 
                <br/>
                Whittier 90603 <br/>
                <span>Spensirfields@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[33.945080, -117.995191]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[33.945080, -117.995191]}>
                        <Popup>Spencer's Hometown</Popup>
                    </Marker>
                </MapContainer>
            </div>
        <Loader type="pacman" />
        </div>
    </>
    )
}


export default Contact 