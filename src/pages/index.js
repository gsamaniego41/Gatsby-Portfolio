import React from "react"
// import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Hero from "../components/home/hero"
import Skills from "../components/home/skills"
import HomeProjectList from "../components/home/projectlist"

library.add(fab, faEnvelope)

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Skills />
        <HomeProjectList />
      </Layout>
    </>
  )
}

export default Home
