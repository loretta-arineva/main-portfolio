import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons';

const FooterContact = () => {
    return (
        <div className="footer-contact">
            <div className="footer-message">
                <h3><Link target="_blank" className="contact-link" to="/contact">Drop me a line,</Link> I'd love to hear from you!</h3>
            </div>
            <div className="social">
                <p>Want to be my friend?</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/loretta-krasteva" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    <a href="https://discord.com/users/Kasai%20Senshi#9784/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a>
                    <a href="https://github.com/loretta-krasteva" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                </div>
            </div>
        </div>
    )
}

export default FooterContact;
