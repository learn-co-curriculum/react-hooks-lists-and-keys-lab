import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectDetails = projects.map(dataInside => {
    return <ProjectItem
    key = {dataInside.id}
    name = {dataInside.name} 
    about={dataInside.about} 
    technologies={dataInside.technologies}/>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectDetails}
        </div>
    </div>
  );
}

export default ProjectList;
