import React from 'react';
import test1 from './../assets/test1.jpeg';
import test2 from './../assets/test2.jpg';
import test3 from './../assets/test3.jpg';

function Projects() {
    const projectList = [
        { 
            name: 'Project One',
            description: 'This is a description for Project One.',
            image: test1
        },
        { 
            name: 'Project Two',
            description: 'This is a description for Project Two.',
            image: test2
        },
        { 
            name: 'Project Three',
            description: 'This is a description for Project Three.',
            image: test3
        },
    ];

    return (
        <div style={{ margin: '20px' }}>
            <h2>My Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <img src={project.image} alt={project.name} style={{ width: '300px', borderRadius: '5px' }}/>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;
