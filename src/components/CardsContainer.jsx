import React from 'react'

import './CardsContainer.css'

function CardsContainer(props) {
  return (
    <section className='card-container'>
      {props.children}
    </section>
  )
}

export default CardsContainer