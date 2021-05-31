import React from 'react';

const ContactForm = () => {
    return (
        <form action="https://formsubmit.io/send/b5058b82-60cd-4991-ad75-b5678bcdbbbe" method="POST" id="contact-form">
            <input type="text" maxlength="256" placeholder="Your Full Name" id="full-name" name="name" required />
            <input type="email" maxlength="256" placeholder="Your Email" id="email" required name="email"/>
            <textarea name="" id="" cols="20" rows="10" maxlength="5000" placeholder="Your Message..." required name="text"></textarea>
            <input name="_formsubmit_id" type="text" style={{display: "none"}}></input>
            <input type="submit" value="Submit" className="form-submit__btn" />
        </form>
    )
}

export default ContactForm;
