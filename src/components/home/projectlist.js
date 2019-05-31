import React from "react"
import { projectSummary } from "../../data/projects-data"

import HomeProject from "./project"

const HomeProjectList = () => {
  return (
    <ul>
      {projectSummary.map(p => (
        <HomeProject
          key={p.id}
          id={p.id}
          title={p.title}
          desc={p.desc}
          thumb={p.thumb}
        />
      ))}
    </ul>
  )
}

export default HomeProjectList
