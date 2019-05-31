import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Skills from "../components/skills"

const Home = () => {
  return (
    <>
      <Layout>
        <h1>
          Gabriel
          <br /> Samaniego
        </h1>
        <h2>Creative Full Stack Developer</h2>

        <Skills />
      </Layout>
    </>
  )
}

export default Home
