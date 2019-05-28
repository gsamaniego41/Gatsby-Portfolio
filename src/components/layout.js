import React from "react"

import NavBar from "../components/nav"
import Footer from "../components/footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.main_container}>
      <div className={layoutStyles.content}>
        <NavBar />
        <div className={layoutStyles.content_container}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
