import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

const Home = () => {
  return (
    <div>
      <h1>Gabriel Samaniego</h1>
      <h2>Creative Full Stack Developer</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me.</Link>
      </p>
      <p>
        Go to: <Link to="/blog">Blog</Link>
        {" | "}
        <Link to="/about">About</Link>
      </p>

      <Footer />
    </div>
  )
}

export default Home
