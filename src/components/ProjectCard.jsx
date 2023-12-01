import React from 'react'

import './ProjectCard.css'

function ProjectCard(props) {

  function clickedOnCard(){
    window.open(props.link, '_blank');
  }
  

  return (
    // <section className='project-card' onClick={props.clickedOnCard(props.link)}>
    <section className='project-card' onClick={clickedOnCard}>
      <img src={props.imageLink} alt={props.imageAlt} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </section>
  )
}


export default ProjectCard