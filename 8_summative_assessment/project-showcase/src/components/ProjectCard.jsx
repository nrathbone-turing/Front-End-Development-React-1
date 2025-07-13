import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="project">
      <Link to={`/projects/${project.id}`}>
        <h3>{project.title}</h3>
      </Link>
      <img src={project.image} alt={project.alt} />
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;
