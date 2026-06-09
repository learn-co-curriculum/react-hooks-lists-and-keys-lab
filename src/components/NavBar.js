import React from "react";
import Links from "./Links";

function NavBar() {
  const links = ["home", "about", "projects"];
  return (
    <nav>
      {links.map((link) => (
        <a key={link} href={`#${link}`}>
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
