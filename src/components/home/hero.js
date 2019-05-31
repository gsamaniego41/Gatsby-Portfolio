import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import profilePic from "../../assets/images/Gabe.jpg"
import arrow from "../../assets/triangle-arrow.png"

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
      </div>
      <div className="hero_right">
        <img src={profilePic} alt="Gabe" />
        <div className="hero_social_icons">
          <a
            href="https://www.linkedin.com/in/gabriel-samaniego/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            href="https://github.com/gsamaniego41"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-samaniego/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="envelope" />
          </a>
        </div>
      </div>
      <img src={arrow} alt="arrow" className="hero_arrow_down" />
    </section>
  )
}

export default Hero
