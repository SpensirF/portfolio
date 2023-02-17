import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from "../../data/portfolio.json";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderPorfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                            </div>
                        )
                    }) 
                }
            </div>
        )
    }

    return (
        <>
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portfolio".split("")} 
                    idx={15}
                />
            </h1>
            <div>{renderPorfolio(portfolioData.portfolio)}</div>
        </div>
        <Loader type="pacman"/>
        </>
    ); 
}

export default Portfolio