import React from 'react'

import './HeroSection.css'

function HeroSection({tagline}) {
  return (
    <section className='hero-section'>
      <h1>Crafting Digital Realities</h1>
      <p>{tagline}</p>
    </section>
  )
}

export default HeroSection