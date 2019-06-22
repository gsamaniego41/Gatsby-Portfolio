import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

import profilePic from "../../images/Gabe.jpg"
import arrow from "../../images/triangle-arrow.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_left">
        <h1>
          Gabriel
          <br /> Samaniego
        </h1>
        <h4>
          A Full Stack Software Engineer <br />
          who loves building fully responsive,
          <br /> pixel-perfect web UIs.
        </h4>
        <div className="hero_social_icons">
          <a
            href="https://www.linkedin.com/in/gabriel-samaniego/"
            target="_blank"
            rel="noopener noreferrer"
            className="social_icon"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            href="https://github.com/gsamaniego41"
            target="_blank"
            rel="noopener noreferrer"
            className="social_icon"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            href="https://twitter.com/gsamaniego41"
            target="_blank"
            rel="noopener noreferrer"
            className="social_icon"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
          <Link to="/#contact" className="social_icon">
            <FontAwesomeIcon icon="envelope" />
          </Link>
        </div>
        <img src={arrow} alt="arrow" className="hero_arrow_down" />
      </div>
      <div className="hero_right">
        <img src={profilePic} alt="Gabe" />
      </div>
    </section>
  )
}

export default Hero
