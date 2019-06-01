import React from "react"
import { projectSummary } from "../../data/projects-data"

import HomeProject from "./project"

const HomeProjectList = () => {
  return (
    <>
      <div className="section_title">
        <h2>Projects</h2>
        <p>Some of my proudest work</p>
      </div>
      <ul className="project_summary_container">
        {projectSummary.map(p => (
          <HomeProject
            key={p.id}
            id={p.id}
            title={p.title}
            desc={p.desc}
            thumb={p.thumb}
            site={p.site}
          />
        ))}
      </ul>
    </>
  )
}

export default HomeProjectList
