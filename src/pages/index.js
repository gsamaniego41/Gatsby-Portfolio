import React from "react"
import { Link } from "gatsby"

import NavBar from "../components/nav"
import Footer from "../components/footer"

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Gabriel Samaniego</h1>
      <h2>Creative Full Stack Developer</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me.</Link>
      </p>

      <Footer />
    </div>
  )
}

export default Home
