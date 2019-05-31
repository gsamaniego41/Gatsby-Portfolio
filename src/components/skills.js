import React from "react"
import { skills } from "../data/skills"

const Skills = () => {
  return (
    <section className="skills_container">
      <div className="section_title">
        <h2>Skills</h2>
        <p>I code and I design</p>
      </div>
      <div className="skill_list">
        {skills.map(skill => (
          <div className="skill_item">{skill}</div>
        ))}
      </div>
    </section>
  )
}

export default Skills
