// src/components/ProjectList.js
import React from "react";
import ProjectItem from './ProjectItem'; // <--- IMPORT THE NEW PROJECTITEM COMPONENT

// ProjectList component receives 'projects' array as a prop
function ProjectList({ projects }) { // Using destructuring
  return (
    <div id="projects">
      <h2>My Projects</h2>
      {projects.map((project) => ( // Map over the projects array
        <ProjectItem
          key={project.id}
          name={project.name}           // Pass the 'name' prop
          about={project.description}   // Pass 'description' from project as 'about' prop
          technologies={project.technologies} // Pass the 'technologies' prop
        />
      ))}
    </div>
  );
}
export default ProjectList;