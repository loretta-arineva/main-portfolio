import React, { useEffect } from 'react';
import FooterContact from '../components/FooterComponents/FooterContact';
import Afterword from '../components/FooterComponents/Afterword';
import SmallFooter from '../components/FooterComponents/SmallFooter';

const Footer = () => {
    const animate = element => (
        element.classList.add(ANIMATE_CLASS_NAME)
    );

    const isAnimated = element => (
        element.classList.contains(ANIMATE_CLASS_NAME)
    );

    const options = () => {
        return {
            root: document.querySelector('footer'),
            rootMargin: '0px',
            threshold: 0
        }
    };

    let handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                animate(entry.target);
            }
        });
    }

    let observer = new IntersectionObserver(handleIntersection, options);


    useEffect(() => {
        const logo = document.querySelector('.footer-logo');
        observer.observe(logo);
        const smallFooter = document.querySelector('.small-footer');
        observer.observe(smallFooter);
    });

    return (
        <footer>
            <div className="footer-wrapper">
                <FooterContact></FooterContact>
                <Afterword></Afterword>
                <SmallFooter></SmallFooter>
            </div>
        </footer>
    )
}

export default Footer;
