import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="navlinks">
            <Link activeClassName="active_nav_item" to="/">
              Home
            </Link>
            <Link activeClassName="active_nav_item" to="/about">
              Skills
            </Link>
            <Link activeClassName="active_nav_item" to="/projects">
              Work
            </Link>
            <Link activeClassName="active_nav_item" to="/contact">
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
