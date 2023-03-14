import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkItem = links.map((link)=> {
    console.log(link)
    return (
      <a href={`#${link}`} key={link}>{link}</a>
    )
  })

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {linkItem}
      </nav>
  );
}

export default NavBar;
