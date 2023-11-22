import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={''}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;

