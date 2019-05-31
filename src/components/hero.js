import React from "react"
import profilePic from "../assets/images/Gabe.jpg"
import arrow from "../assets/triangle-arrow.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_left">
        <h1>
          Gabriel
          <br /> Samaniego
        </h1>
        <h4>
          I’m a Creative Full Stack Software Engineer I love building fully
          responsive, pixel-perfect web UIs.
        </h4>
      </div>
      <div className="hero_right">
        <img src={profilePic} alt="Gabe" />
        <div className="hero_social_icons">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <FontAwesomeIcon icon={["fab", "github"]} />
          <FontAwesomeIcon icon="envelope" />
        </div>
      </div>
      <img src={arrow} alt="arrow" className="hero_arrow_down" />
    </section>
  )
}

export default Hero
