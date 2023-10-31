import React from 'react'

const ProjectCard = ({project}) => {
    const {title, tagline, description, link, github, tags, features, image} = project;

    return (
        <div>
            <h2>{title}</h2>
            <p>{tagline}</p>
            <p>{description}</p>
        </div>
    )

}

export default ProjectCard;
