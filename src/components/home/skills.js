import React from "react"
import { skills } from "../../data/skills"
import skillsImg from "../../images/skills-img.png"

const Skills = () => {
  return (
    <section className="skills_container">
      <div>
        <div className="section_title">
          <h2>Skills</h2>
          <p>I code and I design</p>
        </div>
        <div className="skill_list">
          {skills.map(skill => (
            <div className="skill_item">{skill}</div>
          ))}
        </div>
      </div>
      <img
        src={skillsImg}
        alt="vector drawing of a text editor and graphic design tool"
      />
    </section>
  )
}

export default Skills
