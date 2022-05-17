import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkHeaders = links.map((link) => {
    return <a key={link} href="#home">{link}</a>
  })
  return(
  <nav>
    {linkHeaders}
  </nav>
  )
}

export default NavBar;
