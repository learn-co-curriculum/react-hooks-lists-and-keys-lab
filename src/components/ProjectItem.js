import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  const techItem = technologies?.map((item) => { 
    return <span key={item}>{item}</span>
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techItem}</div>
    </div>
  );
}

export default ProjectItem;
