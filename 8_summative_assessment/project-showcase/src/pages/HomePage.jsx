import React from 'react';
import ProjectCard from "../components/ProjectCard";

function HomePage({ projects }) {
  return (
    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>I come from a support leadership role where I spent a lot of time bridging feedback to product and engineering. I realized I wanted to go beyond surface fixes and learn to build systemic solutions myself, so I joined my company’s internal apprenticeship program and enrolled in the Turing and Flatiron School bootcamps. I’m especially excited about applying what I know about UX pain points for internal and external users, as well as how to find and address edge cases, to my future of building more resilient tools.</p>
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
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;