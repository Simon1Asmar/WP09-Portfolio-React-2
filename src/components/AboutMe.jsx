import React from 'react'

import './AboutMe.css'
import CardsContainer from './CardsContainer'

function AboutMe(props) {
  return (
    <section id='about-me'>
      <img src={props.profilePic} alt="Profile Pic"/>
      <h1>{props.name}</h1>
      {props.children}
      <p>{props.paragraph}</p>

      <CardsContainer>
        {props.skills.map((skill)=>(
          <div className='skill-or-interest'>{skill}</div>
        ))}
      </CardsContainer>
      
      <CardsContainer>
        {props.interests.map((interest)=>(
          <div className='skill-or-interest'>{interest}</div>
        ))}
      </CardsContainer>
    </section>
  )
}

export default AboutMe