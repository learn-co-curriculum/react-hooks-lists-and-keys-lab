import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((url) => {
    return (
      <a key={url} href={"#" + url}>
        {url}
      </a>
    );
  });

  return <nav>{linkElements}</nav>;
}

export default NavBar;
