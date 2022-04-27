import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const newLinks = links.map(linksData => {
    return (
      <a key={linksData} href={'#'+linksData}>{linksData}</a>
    )
  })

  return <nav>{newLinks}</nav>;
}

export default NavBar;
