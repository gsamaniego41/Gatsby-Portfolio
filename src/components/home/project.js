import React from "react"

const HomeProject = ({ id, title, desc, thumb, site, repo }) => {
  return (
    <li className="homepage_project_item">
      <div className="homepage_project_summary">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="buttons_container">
          <a href={site} target="_blank" rel="noopener noreferrer">
            <button>Visit Site</button>
          </a>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <button>View Code</button>
          </a>
          <button>Story</button>
        </div>
      </div>
      <div className="project_thumbnail">
        <a href={site} target="_blank" rel="noopener noreferrer">
          <img src={`${thumb}`} alt={title} />
        </a>
      </div>
    </li>
  )
}

export default HomeProject
