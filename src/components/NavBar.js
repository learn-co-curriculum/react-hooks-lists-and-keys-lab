import React from "react";

const displayLinks = (links) => {
  return links.map(link => <a href={"#" + link} key={Math.random()}>{link}</a>)
}

function NavBar() {
  const links = ["home", "about", "projects"];

  return (<nav>
    {displayLinks(links)}
  </nav>);
}

export default NavBar;
