import React from 'react'
import Title from '../components/HeroComponents/HeroTitle';
import Description from '../components/HeroComponents/HeroDescription';
import Projects from '../components/HeroComponents/Work/ProjectCard';

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-content-wrapper">
                <Title/>
                <Description></Description>
                <Projects></Projects>
            </div>
        </section>
    )
}

export default Hero
