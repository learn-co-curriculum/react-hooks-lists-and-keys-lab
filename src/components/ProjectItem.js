import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  const techItem = technologies?.map((item) => { 
    // console.log(techItem, "WHAT ARE WE GETTING BACK")
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
