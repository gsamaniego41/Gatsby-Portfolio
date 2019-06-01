import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="navlinks">
            <Link activeClassName="active_nav_item" to="/#home">
              Home
            </Link>
            <Link activeClassName="active_nav_item" to="/#skills">
              Skills
            </Link>
            <Link activeClassName="active_nav_item" to="/#projects">
              Projects
            </Link>
            <Link activeClassName="active_nav_item" to="/#contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div className="nav_black_bg" />
    </header>
  )
}

export default NavBar
