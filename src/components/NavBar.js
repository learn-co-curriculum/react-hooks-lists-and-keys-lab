import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkA = links.map(link => {
    return <a href={`#${link}`} key={link}>{link}</a>
  })
  
  return <nav>{linkA}</nav>;
}

export default NavBar;
