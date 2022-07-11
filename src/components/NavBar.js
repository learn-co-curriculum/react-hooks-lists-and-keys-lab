import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let linksList = links.map(link => <a key={link} href={`#${link}`}>{link}</a>)

  return (<nav>{linksList}</nav>)
}

export default NavBar;
