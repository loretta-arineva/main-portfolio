import React from 'react'
import Title from '../components/HeroComponents/HeroTitle';
import Description from '../components/HeroComponents/HeroDescription';
import Button from '../components/multifunctional/ArrowButton';

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-content-wrapper">
                <Title/>
                <Description></Description>
            </div>
        </section>
    )
}

export default Hero
