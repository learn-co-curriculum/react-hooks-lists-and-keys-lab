import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((props) => (
          <ProjectItem
            key={props.id}
            name={props.name}
            about={props.about}
            technologies={props.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
