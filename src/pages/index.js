import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Home = () => {
  return (
    <div>
      <Layout>
        <h1>Gabriel Samaniego</h1>
        <h2>Creative Full Stack Developer</h2>
        <p>
          Need a developer? <Link to="/contact">Contact Me.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default Home
