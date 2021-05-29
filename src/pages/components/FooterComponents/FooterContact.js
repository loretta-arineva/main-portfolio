import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faDiscord} from '@fortawesome/free-brands-svg-icons';
const FooterContact = () => {
    return (
        <div className="footer-contact">
            <div className="footer-message">
                <h2><a target="_blank" className="contact-link">Drop me a line,</a> I'd love to hear from you!</h2>
            </div>
            <div className="social">
                <p>Want to be my friend?</p>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export default FooterContact;
