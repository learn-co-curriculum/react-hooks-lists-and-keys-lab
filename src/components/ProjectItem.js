import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log (name)
  const eachTechnology = technologies.map(techs => <span key={techs}>{techs}</span>)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {eachTechnology}
      </div>
    </div>
  );
}

export default ProjectItem;
