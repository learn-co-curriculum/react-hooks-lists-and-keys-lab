import React from "react"

function NavBar() {
  const links = ["home", "about", "projects"]
  console.log("Link: ", links)
  const linkElements = links.map((link) => {
    return (
      <a key={link} href={`#${link}`}>
        {link}
      </a>
    )
  })

  return <nav>{linkElements}</nav>
}

export default NavBar
