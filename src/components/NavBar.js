import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((link,index) => {
    return <a key={index} href={"#" + link}>{link}</a>;
  });

  return <nav>{linkElements}</nav>;
}

export default NavBar;
