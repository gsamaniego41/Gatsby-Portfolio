import React from "react"
import { Link } from "gatsby"

import navStyles from "./nav.module.scss"

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className={navStyles.navbar}>
          <Link to="/" exact>
            G/S
          </Link>
          <div className={navStyles.navlinks}>
            <Link activeClassName={navStyles.active_nav_item} to="/">
              Home
            </Link>
            <Link activeClassName={navStyles.active_nav_item} to="/about">
              About
            </Link>
            <Link activeClassName={navStyles.active_nav_item} to="/blog">
              Blog
            </Link>
            <Link activeClassName={navStyles.active_nav_item} to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
