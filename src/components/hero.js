import React from "react"
import profilePic from "../assets/images/Gabe.jpg"

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
          <i className="fab fa-linkedin" />
          <i className="fab fa-github" />
          <i className="far fa-envelope" />
        </div>
      </div>
    </section>
  )
}

export default Hero
