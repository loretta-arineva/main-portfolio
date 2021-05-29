import React from 'react';
import NextPage from '../components/multifunctional/NextPage';

const About = () => {
    return (
        <section id="about">
            <h1>Hey there!</h1>
            <h2>About me</h2>
            <div className="about-bio">
                <h3>Shortly...</h3>
                <p className="about-paragraph-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. <em>Amet venenatis urna cursus eget nunc scelerisque viverra.</em> Auctor neque vitae tempus quam pellentesque nec nam. Lacus vestibulum sed arcu non odio euismod. Aliquam etiam erat velit.</p>
                <p className="about-paragraph-2"><span class="text-underline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Risus pretium quam vulputate dignissim suspendisse in est ante. Amet venenatis urna cursus eget nunc scelerisque viverra. <strong>Auctor neque vitae tempus quam pellentesque nec nam.</strong> Lacus vestibulum sed arcu non odio euismod. Aliquam etiam erat velit scelerisque in. Dignissim sodales ut eu sem integer vitae justo eget magna. </p>
                <h3>My work</h3>
                <p className="about-paragraph-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. <em>Amet venenatis urna cursus eget nunc scelerisque viverra.</em> Auctor neque vitae tempus quam pellentesque nec nam. Lacus vestibulum sed arcu non odio euismod. Aliquam etiam erat velit.</p>
                <p className="about-paragraph-2"><span class="text-underline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Risus pretium quam vulputate dignissim suspendisse in est ante. Amet venenatis urna cursus eget nunc scelerisque viverra. <strong>Auctor neque vitae tempus quam pellentesque nec nam.</strong> Lacus vestibulum sed arcu non odio euismod. Aliquam etiam erat velit scelerisque in. Dignissim sodales ut eu sem integer vitae justo eget magna. </p>
                <h3>My process</h3>
                <p className="about-paragraph-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est ante. <em>Amet venenatis urna cursus eget nunc scelerisque viverra.</em> Auctor neque vitae tempus quam pellentesque nec nam. Lacus vestibulum sed arcu non odio euismod. Aliquam etiam erat velit.</p>
                <p className="about-paragraph-2"><span class="text-underline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Risus pretium quam vulputate dignissim suspendisse in est ante. Amet venenatis urna cursus eget nunc scelerisque viverra. <strong>Auctor neque vitae tempus quam pellentesque nec nam.</strong> Lacus vestibulum sed arcu non odio euismod. Aliquam etiam erat velit scelerisque in. Dignissim sodales ut eu sem integer vitae justo eget magna. </p>
            </div>
            <div className="contact-me">
                <h3>Contact me</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
            <div className="signature">
                <p>l.krasteva</p>
            </div>
            <NextPage sub="Let's chat">Contact</NextPage>

        </section>
    )
}

export default About;
