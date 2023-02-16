import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['p', 'e', 'n', 'c', 'e','r']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.' ]

    useEffect (()=> {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <> 
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _13`}>i</span>
                <span className={`${letterClass} _14`}>y</span>
                <span className={`${letterClass} _15`}>a</span>
                <span className={`${letterClass} _16`}>h!</span>
                <br/> 
                <span className={`${letterClass} _17`}>I</span>
                <span className={`${letterClass} _18`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Full Stack Developer / Gamer / Videographer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>

            </div>
        <Logo />
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home