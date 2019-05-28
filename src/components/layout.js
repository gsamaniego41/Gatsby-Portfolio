import React from "react"

import NavBar from "../components/nav"
import Footer from "../components/footer"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
