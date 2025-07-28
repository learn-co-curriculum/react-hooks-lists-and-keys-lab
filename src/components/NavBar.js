// src/components/NavBar.js
import React from "react";

function NavBar() {
  // This array should be provided in your starter code
  const links = ["home", "about", "projects"]; // Example links

  return (
    <nav>
      {links.map((link, index) => ( // Use .map() to iterate
        <a key={index} href={`#${link}`}> {/* Use index as key, and template literal for href */}
          {link}
        </a>
      ))}
    </nav>
  );
}
export default NavBar;
