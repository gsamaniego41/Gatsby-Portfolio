import React from "react"
import { Link } from "gatsby"

const navStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1000px",
  padding: "15px 0",
  margin: "0 auto",
  fontSize: "20px",
}

const linkStyles = {
  width: "250px",
  display: "flex",
  justifyContent: "space-between",
}

const NavBar = () => {
  return (
    <header style={{ borderBottom: "1px solid black" }}>
      <nav>
        <div style={navStyles}>
          <Link to="/" exact>
            G
          </Link>
          <div style={linkStyles}>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
