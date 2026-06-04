import React from 'react'

export default function Talks({list}){
  if (!list || !list.length) return null
  return (
    <section id="talks">
      <h2>Talks</h2>
      <div>
        <ul style={{paddingLeft:20,color:'#4a5568'}}>
          {list.map((t,i)=> (
            <li key={i} style={{marginBottom:10}}>
              <strong>{t.title}</strong>, {t.event} ({t.year}) {t.video_link && <a href={t.video_link} className="resource-link">Video</a>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
