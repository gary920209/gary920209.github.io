import React from 'react'

export default function Research({papers}){
  if (!papers || !papers.length) return null
  return (
    <section id="research">
      <h2>Research</h2>
      <p className="section-intro">I'm interested in AIML applications, particularly in speech/audio and NLP.</p>
      <div className="research">
        {papers.map((paper, idx) => (
          <div className="research-item card" key={idx}>
            <div className="card-image research-image">
              <img src={paper.image} alt={paper.title} />
            </div>
            <div className="card-details">
              <a href={paper.paper_link || '#'} className="paper-title">{paper.title}</a>
              <p className="authors">{Array.isArray(paper.authors) ? paper.authors.map(a => a.name || a).join(', ') : paper.authors}</p>
              <p className="conference">{paper.conference}</p>
              <div className="links-container">
                {paper.paper_link && <a href={paper.paper_link} className="resource-link">Paper</a>}
                {paper.page_link && <a href={paper.page_link} className="resource-link">Website</a>}
                {paper.code_link && <a href={paper.code_link} className="resource-link">Code</a>}
              </div>
              <p className="abstract">{paper.abstract}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
