import React from 'react'

export default function Honors({list}){
  if (!list || !list.length) return null
  return (
    <section id="honors">
      <h2>Honors</h2>
      <div>
        <ul style={{paddingLeft:20,color:'#4a5568'}}>
          {list.map((h,i)=> <li key={i} style={{marginBottom:5}} dangerouslySetInnerHTML={{__html: h}} />)}
        </ul>
      </div>
    </section>
  )
}
