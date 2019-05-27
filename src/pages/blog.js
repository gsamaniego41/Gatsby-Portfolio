import React from "react"
import { Link } from "gatsby"

import NavBar from "../components/nav"
import Footer from "../components/footer"

const Blog = () => {
  return (
    <div>
      <NavBar />
      <h1>Blog</h1>
      <p>Posts will show up here</p>
      <p>
        Need a developer? <Link to="/contact">Contact Me.</Link>
      </p>
      <p>
        Go to:{" "}
        <Link to="/" exact>
          Home
        </Link>
        {" | "}
        <Link to="/about">About</Link>
      </p>

      <Footer />
    </div>
  )
}

export default Blog
