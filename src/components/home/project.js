import React from "react"

const HomeProject = ({ id, title, desc, thumb, alt }) => {
  return (
    <li className="homepage_project_item">
      <div>
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
      <img src={thumb} alt={alt} />
    </li>
  )
}

export default HomeProject
