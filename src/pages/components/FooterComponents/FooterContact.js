import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faDiscord} from '@fortawesome/free-brands-svg-icons';

const FooterContact = () => {
    return (
        <div className="footer-contact">
            <div className="footer-message">
                <h3><Link target="_blank" className="contact-link" to="/contact">Drop me a line,</Link> I'd love to hear from you!</h3>
            </div>
            <div className="social">
                <p>Want to be my friend?</p>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export default FooterContact;
