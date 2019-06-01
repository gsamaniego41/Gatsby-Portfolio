import React from "react"
import { projectSummary } from "../../data/projects-data"

import HomeProject from "./project"

const HomeProjectList = () => {
  return (
    <>
      <div className="section_title" id="projects">
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
            repo={p.repo}
            frontend={p.frontend}
            backend={p.backend}
          />
        ))}
      </ul>
    </>
  )
}

export default HomeProjectList
