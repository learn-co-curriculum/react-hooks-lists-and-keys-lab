import React from "react";

// technologies: ["Rails", "Bootstrap CSS"],

function ProjectItem({ name, about, technologies }) {
  const techArray = technologies.map((technology) => {
    return (<span key={technology}>{technology}</span>)
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techArray}
      </div>
    </div>
  );
}

export default ProjectItem;
