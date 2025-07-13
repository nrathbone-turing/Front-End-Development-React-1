import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail({ projects}) {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <main>
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.alt || project.title} className="project-image"/>
      <p>{project.description}</p>
      {project.link && (
        <p>
          <a href={project.link} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </p>
      )}
    </main>
  );
}

export default ProjectDetail;