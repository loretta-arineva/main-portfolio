import React from 'react'
import Title from '../components/HeroComponents/HeroTitle';
import Description from '../components/HeroComponents/HeroDescription';
import Projects from '../components/HeroComponents/Work/ProjectCard';
import NextPage from '../components/multifunctional/NextPage';

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-content-wrapper">
                <Title/>
                <Description></Description>
                <Projects></Projects>
                <NextPage sub="Learn more">About</NextPage>
            </div>
        </section>
    )
}

export default Hero
