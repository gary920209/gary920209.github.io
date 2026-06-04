import React from 'react'

export default function News({list}){
  if (!list || !list.length) return null
  return (
    <section id="news">
      <h2>News</h2>
      <div className="news-container">
        {list.map((n, i) => (
          <div key={i} className="news-item">
            <div className="news-date-badge">{n.date}</div>
            <div className="news-content" dangerouslySetInnerHTML={{__html: n.news}} />
          </div>
        ))}
      </div>
    </section>
  )
}
