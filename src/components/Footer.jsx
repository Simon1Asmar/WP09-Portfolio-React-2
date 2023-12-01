import React from 'react'

import './Footer.css'

function Footer(props) {
  return (
    <section className='footer'>
      <p>&copy; {props.copyrightYear} {props.name}. All rights reserved.</p>
      {props.children}
    </section>
  )
}

export default Footer