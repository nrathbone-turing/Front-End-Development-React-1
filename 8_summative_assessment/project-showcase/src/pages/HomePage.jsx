import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function HomePage() {
  return (
    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>Your blurb here...</p>
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;