// src/components/ProjectItem.js
import React from "react";

// Change 'description' to 'about' to match the test's prop name
// Ensure 'technologies' is also destructured
function ProjectItem({ name, about, technologies }) { // <--- CHANGE THIS LINE: 'description' -> 'about'
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p> {/* <--- Use 'about' here */}
      <div>
        <strong>Technologies: </strong>
        {/* Add || [] to ensure technologies is an array before calling map */}
        {(technologies || []).map((tech, index) => (
          <span key={index} className="technology-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
export default ProjectItem;