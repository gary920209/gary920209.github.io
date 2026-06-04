import React from 'react'

export default function Projects({list}){
  if (!list || !list.length) return null
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {list.map((p,i)=> (
          <div className="project-item card" key={i}>
            <div className="card-details" style={{padding:15}}>
              <span className="paper-title">{p.title}</span>
              <div style={{marginBottom: '0.5rem'}}>{p.github_link && <a href={p.github_link} className="resource-link">GitHub</a>}</div>
              <p>{p.abstract}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
