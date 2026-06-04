import React from 'react'

export default function Header({data}){
  const defaultParagraphs = [
    "I am currently a Master’s student in Electrical and Computer Engineering at Carnegie Mellon University, specializing in Multimodal LLM and Machine Learning Systems. I received my Bachelor’s degree in EE from National Taiwan University (NTU).",
    "I am passionate about leveraging AI to solve real-world problems and drive meaningful impact. As a Founding Engineer, I established an education technology startup focused on developing AI-powered solutions for automated problem-solving, intelligent lecture generation, and various educational applications. Our products have partnered with multiple leading educational institutions across Taiwan.",
    "My research interests center on speech and audio intelligence. During my AI research internships at MediaTek and ASUS, I worked on fine-tuning large spoken language models (TASTE) and building Agentic Audio LLMs (Audio-Maestor), aiming to create more natural and interactive voice interfaces."
  ]

  const paragraphs = data && data.intro_paragraphs ? data.intro_paragraphs : (data && data.intro ? [data.intro] : defaultParagraphs)

  return (
    <header className="profile-header">
      <div className="profile-text">
        <h1 className="name">Kuan-Yi (Gary) Lee</h1>
        {paragraphs.map((p, i) => (
          <p key={i} className="bio" dangerouslySetInnerHTML={{__html: p}} />
        ))}

        <p className="bio bio-tags">
          <span className="tag">EdTech</span>
          <span className="tag">AI</span>
          <span className="tag">Speech</span>
          <span className="tag">NLP</span>
        </p>
        <div className="social-icons">
          <a href="mailto:garylee.ntu@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
          <a href={data.cv_link || '#'} title="CV"><i className="ai ai-cv"></i></a>
          <a href={data.scholar_link || '#'} title="Google Scholar"><i className="ai ai-google-scholar"></i></a>
          <a href={data.github_link || 'https://github.com/gary920209'} title="GitHub"><i className="fab fa-github"></i></a>
          <a href={data.linkedin_link || '#'} title="LinkedIn"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="profile-image-container">
        <img src="/images/Gary.jpg" alt="Kuan-Yi (Gary) Lee" />
      </div>
    </header>
  )
}
