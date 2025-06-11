import React from "react"

function NavBar() {
  const links = ["home", "about", "projects"]
  console.log("Link: ", links)
  return (
    <nav>
      <a key={links.id} href={`#${links}`}>
        {links}
      </a>
    </nav>
  )
}

export default NavBar
