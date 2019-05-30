import React from "react"
import { skills } from "../data/skills"

const skillStyles = {
  background: "#f2f2f2",
  padding: "7px 12px",
  display: "inline-block",
  borderRadius: "2",
  marginRight: "10px",
  marginBottom: "10px",
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
        <p style={{ borderBottom: "1px solid #aaa", padding: "0 0 20px" }}>
          I code and I design
        </p>
      </div>
      <div style={{ width: "40%" }}>
        {skills.map(skill => (
          <div style={skillStyles}>{skill}</div>
        ))}
      </div>
    </section>
  )
}

export default Skills
