import React from 'react'

export default function Teaching(){
  return (
    <section id="teaching">
      <h2>Teaching</h2>
      <div className="timeline-container">
         <div className="timeline-item">
          <div className="timeline-marker">
            <a href="https://woolly-piano-e46.notion.site/22864ecbf4bc80c9bb20d7353916ced9?pvs=74" target="_blank" rel="noreferrer">
              <img src="/images/NTU.png" alt="NTU Logo" />
            </a>
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3 className="timeline-title">Lead & Lecturer</h3>
              <span className="timeline-date">Summer 2025, Summer 2026</span>
            </div>
            <div className="timeline-company"><a href="https://woolly-piano-e46.notion.site/22864ecbf4bc80c9bb20d7353916ced9?pvs=74">AI Agent &amp; Multimodal LLM Professional Workshop</a></div>
            <p className="timeline-desc">Delivered lectures on AI Agents and Multimodal LLMs to 320+ professionals and students.</p>
          </div>
         </div>

         <div className="timeline-item">
          <div className="timeline-marker">
            <a href="https://speech.ee.ntu.edu.tw/~hylee/GenAI-ML/2025-fall.php" target="_blank" rel="noreferrer">
              <img src="/images/NTU.png" alt="NTU Logo" />
            </a>
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3 className="timeline-title">Teaching Assistant</h3>
              <span className="timeline-date">Fall 2025</span>
            </div>
            <div className="timeline-company"><a href="https://speech.ee.ntu.edu.tw/~hylee/GenAI-ML/2025-fall.php">Intro to GenAI &amp; ML (Prof. Hung-Yi Lee)</a></div>
            <p className="timeline-desc">Maintained and scaled the "Judge Boi" autograding system to manage evaluations for 1100+ students.</p>
          </div>
         </div>

         <div className="timeline-item">
          <div className="timeline-marker">
            <a href="https://vllab.ee.ntu.edu.tw/dlcv.html" target="_blank" rel="noreferrer">
              <img src="/images/NTU.png" alt="NTU Logo" />
            </a>
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3 className="timeline-title">Teaching Assistant</h3>
              <span className="timeline-date">Fall 2025</span>
            </div>
            <div className="timeline-company"><a href="https://vllab.ee.ntu.edu.tw/dlcv.html">Deep Learning for Computer Vision (Prof. Yu-Chiang Frank Wang)</a></div>
            <p className="timeline-desc">Designed homework on Self-Supervised Learning (SSL) and segmentation.</p>
          </div>
         </div>

         <div className="timeline-item">
          <div className="timeline-marker">
            <a href="https://speech.ee.ntu.edu.tw/~hylee/ml/2025-spring.php" target="_blank" rel="noreferrer">
              <img src="/images/NTU.png" alt="NTU Logo" />
            </a>
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3 className="timeline-title">Teaching Assistant</h3>
              <span className="timeline-date">Spring 2025</span>
            </div>
            <div className="timeline-company"><a href="https://speech.ee.ntu.edu.tw/~hylee/ml/2025-spring.php">Machine Learning (Prof. Hung-Yi Lee)</a></div>
            <p className="timeline-desc">Designed NLP homework and developed an automated evaluation pipeline for 750+ students.</p>
          </div>
         </div>
      </div>
    </section>
  )
}
