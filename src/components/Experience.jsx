import React from 'react'

export default function Experience({items}){
  if (!items || !items.length) return null
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="timeline-container">
        {items.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-marker">
              <img src={exp.image} alt={exp.title} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title" dangerouslySetInnerHTML={{__html: exp.title}} />
                <span className="timeline-date">{exp.date}</span>
              </div>
              {exp.advisor ? (
                <div className="timeline-company" dangerouslySetInnerHTML={{__html: exp.advisor}} />
              ) : null}
              {Array.isArray(exp.details) ? (
                <ul className="timeline-list">{exp.details.map((d,j)=><li key={j}>{d}</li>)}</ul>
              ) : (
                <p className="timeline-desc">{exp.intro}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
