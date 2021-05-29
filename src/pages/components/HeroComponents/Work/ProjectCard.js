import React from 'react'

const ProjectCard = ({ imgSrc, imgAlt, projTitle, projDesc, projStack }) => {
    return (
        <div className="project">
            <CardImage />
            <CardDescription />
        </div>
    )
}

export default ProjectCard
