import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import News from './components/News'
import Research from './components/Research'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import Projects from './components/Projects'
import Talks from './components/Talks'
import Honors from './components/Honors'
import Teaching from './components/Teaching'
import Footer from './components/Footer'

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Error loading JSON:', err))
  }, [])

  if (!data) return <div style={{padding:20}}>Loading…</div>

  return (
    <div>
      <NavBar />
      <main>
        <Header data={data} />
        <News list={data.news_list} />
        <Research papers={data.paper_list} />
        <Experience items={data.exp_list} />
        <Leadership items={data.leadership_list} />
        <Projects list={data.project_list} />
        <Teaching />
        <Talks list={data.talk_list} />
        <Honors list={data.honor_list} />
        <Footer />
      </main>
    </div>
  )
}
