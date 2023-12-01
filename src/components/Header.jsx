import React from 'react'

import './Header.css'

function Header(props) {
  return (
    <section className='header'>
      <nav>
        {props.children}
      </nav>
    </section>
  )
}

export default Header