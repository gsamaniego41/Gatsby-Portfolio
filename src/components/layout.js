import React from "react"

import NavBar from "../components/nav"
import Footer from "../components/footer"

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
