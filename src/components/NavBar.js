import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link, index) => (
    <a key={index} href={`#${link}`}>
      {link}
    </a>
  ));

  return <nav>{linkElements}</nav>;
}

export default NavBar;
