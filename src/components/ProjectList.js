import React from "react";
import ProjectItem from "./ProjectItem";

const displayProjectItems = (projects) => {
  return projects.map(project => (
    <ProjectItem
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  ))
}

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {displayProjectItems(projects)}
      </div>
    </div>
  );
}

export default ProjectList;
