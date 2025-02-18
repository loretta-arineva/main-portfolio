import React, { useEffect } from 'react';
import { projectData } from '../../../../assets/data/projects';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from './ProjectImage';

const ProjectCard = () => {
    const options = {
        root: null, // use the document's viewport as the container.
        rootMargin: '0px', // % or px - offsets added to each side of the intersection 
        threshold: 0.1 // percentage of the target element which is visible
    }

    let callback = (entries) => {
        entries.forEach(entry => {

            // If entry (project) is visible - according with the params set in `options`
            // then adds `isVisible` class to project
            // otherwise removes `isVisible` class
            // if (entry.isIntersecting) {
            //     entry.target.classList.add('isVisible');
            // } else {
            //     entry.target.classList.remove('isVisible');
            // }

        });
    }

    // Create the intersection observer instance by calling its constructor and passing it a
    // callback function to be run whenever a threshold is crossed in one direction or the other:
    let observer = new IntersectionObserver(callback, options);

    useEffect(() => {
        // Get all the `.project` from DOM and attach the observer to these
        document.querySelectorAll('.project')
            .forEach(project => observer.observe(project));
    })

    return (
        projectData.map((project, key) => {
            return (
                <div className="project" key={key}>
                    <div className="project-image__container">
                        <div className="github-ribbon">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                        <Image project={project} />
                    </div>
                    <div className="project-description">
                        <h2 className="project-title">{project.title}</h2>
                        <h4 className="project-type">{project.type}</h4>
                        <p className="project-stack">{project.stack}</p>
                    </div>
                </div>
            )
        })
    )
}

export default ProjectCard;
