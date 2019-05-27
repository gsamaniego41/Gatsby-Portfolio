import React from "react"
import { Link } from "gatsby"

const Home = () => {
  return (
    <div>
      <h1>Gabriel Samaniego</h1>
      <h2>Creative Full Stack Developer</h2>
      <p>
        {/* Need a developer? <a href="/contact">Contact Me.</a> */}
        Need a developer? <Link to="/contact">Contact Me.</Link>
      </p>
    </div>
  )
}

export default Home
