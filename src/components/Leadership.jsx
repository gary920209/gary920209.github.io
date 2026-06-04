import React from 'react'

export default function Leadership({items}){
  if (!items || !items.length) return null
  return (
    <section id="leadership">
      <h2>Leadership</h2>
      <div className="timeline-container">
        {items.map((item,i)=> (
          <div className="timeline-item" key={i}>
            <div className="timeline-marker">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title" dangerouslySetInnerHTML={{__html: item.title}} />
                <span className="timeline-date">{item.date}</span>
              </div>
              {item.advisor ? (
                <div className="timeline-company" dangerouslySetInnerHTML={{__html: item.advisor}} />
              ) : null}
              {Array.isArray(item.details) ? (
                <ul className="timeline-list">{item.details.map((d,j)=><li key={j}>{d}</li>)}</ul>
              ) : (
                <p className="timeline-desc">{item.intro}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
