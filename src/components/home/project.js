import React from "react"

const HomeProject = ({ id, title, desc, thumb, alt }) => {
  return (
    <li className="homepage_project_item">
      <div className="homepage_project_summary">
        <h3>
          <span>{id}</span>
          {title}
        </h3>
        <p>{desc}</p>
        <div className="buttons_container">
          <button>Visit Site</button>
          <button>View Code</button>
          <button>Story</button>
        </div>
      </div>
      <img src={thumb} alt={title} />
    </li>
  )
}

export default HomeProject
