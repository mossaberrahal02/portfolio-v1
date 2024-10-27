import React from 'react';

function Skills() {
    const skillsList = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'CSS', 'HTML'];

    return (
        <div style={{ margin: '20px' }}>
            <h2>My Skills</h2>
            <ul style={{ padding: 0 }}>
                {skillsList.map((skill, index) => (
                    <li key={index} style={{ listStyleType: 'none' }}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
