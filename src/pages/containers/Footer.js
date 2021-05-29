import React from 'react';
import FooterContact from '../components/FooterComponents/FooterContact';
import Afterword from '../components/FooterComponents/Afterword';
import SmallFooter from '../components/FooterComponents/SmallFooter';

const Footer = () => {
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

export default Footer
