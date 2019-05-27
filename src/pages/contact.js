import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>Email: gsamaniego41@gmail.com</p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/gsamaniego41"
          target="_blank"
          rel="noopener noreferrer"
        >
          gsamaniego41
        </a>
      </p>

      <p>
        Back to:{" "}
        <Link to="/" exact>
          Home
        </Link>
        {" | "}
        <Link to="/about">About</Link>
      </p>

      <Footer />
    </div>
  )
}

export default Contact
