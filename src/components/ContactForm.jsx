import React, { useRef } from 'react'

import './ContactForm.css'

// Importing Icons
import { RiSendPlane2Fill } from "react-icons/ri";

function ContactForm() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const formSubmitted = (event) => {
    event.preventDefault();
    
    console.log(`Form Submitted. Name: ${event.target.name.value}, Email: ${event.target.email.value}, Message: ${event.target.message.value}`);
    console.log(emailRef.current.value);

    saveFormDataInLocalStorage();
    
    //reset the form
    event.target.reset();

  }

  const saveFormDataInLocalStorage = () => {
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    }

    //without JSON.stringify the local storage will have formData: [Object], which is useless
    //stringify makes it look like {formdata: "{"name": "simon", "email":"someone@email.com" ...}"}
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage);
  }

  return (
    <section className='form-container'>
      <form onSubmit={formSubmitted}>
        <input ref={emailRef} type="email" name="email" id="email" placeholder='Email' required/>
        <input ref={nameRef} type="text" name="name" id="name" placeholder='Name' required/>
        <textarea ref={messageRef} name="message" id="message" rows="10" placeholder='Enter your message here' required></textarea>
        <button type="submit">Send <RiSendPlane2Fill/></button>
      </form>
    </section>
  )
}

export default ContactForm