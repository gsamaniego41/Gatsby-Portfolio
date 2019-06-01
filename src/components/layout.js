import React from "react"

import NavBar from "../components/nav"
import Footer from "../components/footer"
import "../styles/index.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = props => {
  return (
    <div className="main_container">
      <div className="banner" />
      <div className="content">
        <NavBar />
        <div className="content_container">{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
