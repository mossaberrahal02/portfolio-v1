import React from 'react';

function Projects() {
    const projectList = [
        { name: 'Project One', description: 'This is a description for Project One.' },
        { name: 'Project Two', description: 'This is a description for Project Two.' },
        { name: 'Project Three', description: 'This is a description for Project Three.' },
    ];

    return (
        <div style={{ margin: '20px' }}>
            <h2>My Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;
