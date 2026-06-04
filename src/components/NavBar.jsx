import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">Kuan-Yi (Gary) Lee</a>
        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
          <a href="#leadership">Leadership</a>
          <a href="#projects">Projects</a>
          <a href="#teaching">Teaching</a>
          <a href="#talks">Other</a>
        </div>
      </div>
    </nav>
  )
}
