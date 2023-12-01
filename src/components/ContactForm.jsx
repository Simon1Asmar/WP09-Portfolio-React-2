import React from 'react'

import './ContactForm.css'

// Importing Icons
import { RiSendPlane2Fill } from "react-icons/ri";

function ContactForm() {
  return (
    <section className='form-container'>
      {/* <h1>Contact Me</h1> */}
      <form onSubmit={formSubmitted}>
        <input type="email" name="email" id="email" placeholder='Email' required/>
        <input type="text" name="name" id="name" placeholder='Name' required/>
        <textarea name="message" id="message" rows="10" placeholder='Enter your message here' required></textarea>
        <button type="submit">Send <RiSendPlane2Fill/></button>
      </form>
    </section>
  )
}

function formSubmitted(event){
  event.preventDefault();
  console.log(`Form Submitted. Name: ${event.target.name.value}, Email: ${event.target.email.value}, Message: ${event.target.message.value}`);
  event.target.reset();
}

export default ContactForm