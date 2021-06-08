import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const linkElements = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return (
    <nav>
      {linkElements}
    </nav>
  )
}

//todo: another way of doing
//   return <nav>
//     <a href="#home">Home</a> 
//     <a href="#about">About</a> 
//     <a href="#projects">Projects</a> 
//   </nav>;
// }

export default NavBar;
