import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJsSquare, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect (()=> {
        setTimeout(() => {
           setLetterClass('text-animate-hover')
       }, 3000)
   }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I’m a software development engineer with over 1000 hours of experience in a short amount of time learning multiple languages, frameworks, and databases such as: Python, C#, MERN, Javascript and SQL. After Graduating from Coding Dojo Bootcamp, I couldn't wait to test my experience and interests in creating projects that will have a positive impact on the world. Example of this, is a project I am currently working on that will help with mental health for people that were affected by the pandemic. 
                </p>
                <p>
                    In my free time, you can find me being creative is multiple mediums like: videography, streaming (via Twitch), entertaining, and in music. Outside of creating I am very passionate about video games. Currently I am self-proclaim semi-pro when it comes to fighting games haha, but love taking part in all games.
                </p>
                
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faPhp} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )

}



export default About 