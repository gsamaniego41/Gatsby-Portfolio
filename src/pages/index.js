import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Skills from "../components/skills"

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />

        <Skills />
      </Layout>
    </>
  )
}

export default Home
