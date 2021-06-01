import React from 'react';
import { useRef } from 'react';

const ContactForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const formSubmitHandler = (event) => {
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
    }

    return (
        <form action="https://formsubmit.io/send/b5058b82-60cd-4991-ad75-b5678bcdbbbe" method="POST" id="contact-form" onSubmit={formSubmitHandler} target="_blank">
            <input type="text" maxLength="256" placeholder="Your Full Name" id="full-name" name="name" required ref={nameRef}  />
            <input type="email" maxLength="256" placeholder="Your Email" id="email" required name="email" ref={emailRef} />
            <textarea id="" cols="20" rows="10" maxLength="5000" placeholder="Your Message..." required name="text" ref={messageRef} ></textarea>
            {/* Spam prevention */}
            <input name="_formsubmit_id" type="text" style={{display: "none"}}></input>
            <input type="submit" value="Submit" className="form-submit__btn" />
        </form>
    )
}

export default ContactForm;
