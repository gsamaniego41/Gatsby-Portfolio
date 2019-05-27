import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>I can code and I can design</p>
      <Link to="/contact">Contact Me</Link>
      <p>
        Back to:{" "}
        <Link to="/" exact>
          Home
        </Link>
      </p>

      <Footer />
    </div>
  )
}

export default About
