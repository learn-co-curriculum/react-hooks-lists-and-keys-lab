import React from "react";
import ProjectItem from "./ProjectItem";
//* Here's an example of one project obj.
// id: 1,
// name: "Reciplease",
// about: "A recipe tracking app",
// technologies: ["Rails", "Bootstrap CSS"],
// },

function ProjectList({ projects }) {
  const projObj = projects.map((project)=> {
    return (
      <div id="project-list" key={project.id}>
        <ProjectItem name={project.name} about={project.about} technologies={project.technologies}/>
      </div>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      {projObj}
    </div>
  );
}

export default ProjectList;
