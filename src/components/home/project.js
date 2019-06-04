import React from "react"

const HomeProject = ({
  id,
  title,
  desc,
  thumb,
  site,
  repo,
  frontend,
  backend,
  tech,
}) => {
  return (
    <>
      <li className="homepage_project_item">
        <div className="homepage_project_summary">
          <div className="project_description">
            <div>
              <h3>{title}</h3>
              {title === "MyHouse" ? (
                <h4>Award: First Place at Lambda School Demo Day 2019</h4>
              ) : null}
              <p>{desc}</p>
            </div>
            <div className="project_tech_stack">
              <span className="tech_stack">Tech Stack: </span>
              {tech.map(t => (
                <div className="tech">{t}</div>
              ))}
            </div>
          </div>
          <div className="project_thumbnail">
            <a href={site} target="_blank" rel="noopener noreferrer">
              <img src={`${thumb}`} alt={title} />
            </a>
          </div>
        </div>

        <div className="buttons_container">
          <a href={site} target="_blank" rel="noopener noreferrer">
            <button>Visit Site</button>
          </a>
          {title === "Lambda Notes" ? (
            <>
              <a href={frontend} target="_blank" rel="noopener noreferrer">
                <button>Frontend Code</button>
              </a>
              <a href={backend} target="_blank" rel="noopener noreferrer">
                <button>Backend Code</button>
              </a>
            </>
          ) : title === "MyHouse" ? (
            <>
              <a href={repo} target="_blank" rel="noopener noreferrer">
                <button>View Code</button>
              </a>
              <a
                href="https://www.figma.com/file/dntPKGUuPCLJ1RNBCPgep3/MyHouse?node-id=42%3A39"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>View Design</button>
              </a>
            </>
          ) : (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <button>View Code</button>
            </a>
          )}
          {/* Saving 'Story' btn for later */}
          {/* <button>Story</button> */}
        </div>
      </li>
    </>
  )
}

export default HomeProject
