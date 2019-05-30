import React from "react"

import NavBar from "../components/nav"
import Footer from "../components/footer"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div className="main_container">
      <div className="content">
        <NavBar />
        <div className="content_container">{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
