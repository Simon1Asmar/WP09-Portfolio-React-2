import React from 'react'

import './PageSection.css'

function PageSection(props) {
  return (
    <section id={props.id} className={"page-section " + props.className}>
      <Title title={props.title}/>
      {props.children}
    </section>
  )
}

function Title({title}){
  if(title){
    return (
      <h1>{title}</h1>
    )
  }
}

export default PageSection