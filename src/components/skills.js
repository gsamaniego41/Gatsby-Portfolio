import React from "react"
import { skills } from "../data/skills"

const skillStyles = {
  border: "1px solid black",
  padding: "7px 12px",
  display: "inline-block",
}

const skillsContainer = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaced-evenly",
}

const Skills = () => {
  return (
    <section style={skillsContainer}>
      <div>
        <h2>Skills</h2>
        <p>I code and I design</p>
      </div>
      <div>
        {skills.map(skill => (
          <div style={skillStyles}>{skill}</div>
        ))}
      </div>
    </section>
  )
}

export default Skills
