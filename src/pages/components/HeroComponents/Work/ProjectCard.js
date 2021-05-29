import React from 'react'
import { projectData } from '../../../../assets/data/projects';

const ProjectCard = () => {

    return (
        projectData.map((project, key) => {
            return (
                <div className="project" key={key}>
                    <figure>
                        <img className="project-image" src={project.img} alt={project.alt} />
                    </figure>
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

export default ProjectCard
