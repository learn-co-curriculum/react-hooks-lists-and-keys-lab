
import React from "react";
import './Style.css'
import ProjectItem from './ProjectItem'; // Import the ProjectItem component

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
