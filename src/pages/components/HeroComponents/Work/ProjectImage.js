import React, { useEffect, useMemo } from 'react';

const ProjectImage = ({ project }) => {

    const options = useMemo(() => {
        return {
            root: null, // use the document's viewport as the container
            rootMargin: '0px', // % or px - offsets added to each side of the intersection 
            threshold: 0 // percentage of the target element which is visible
        }
    }, []);

    let handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target.firstChild.children[0];
                img.src = img.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    }
    let observer = new IntersectionObserver(handleIntersection, options);


    useEffect(() => {
        document.querySelectorAll('figure')
            .forEach(image => observer.observe(image));
    });


    return (
        <figure>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
                <img className="project-image" data-src={project.img} alt={project.alt} />
            </a>
        </figure>
    )
}

export default React.memo(ProjectImage);
