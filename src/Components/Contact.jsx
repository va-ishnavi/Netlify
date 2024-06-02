import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

    emailjs.sendForm('service_j0obprc', 'template_y07u5hj', form.current, '4LbJs3HEBAqoZ-h6J')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email send')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },);
  };

  return (
    <section id="contact">
    <span className='contactTitle'>Contact Me</span>
    <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type="text" className='Name' placeholder='Your Name' name='your_name'/>
        <input type="email" className='email' placeholder='Your Email' name='your_email'/>
        <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
        {/* <a className='sendBtn' href='https://vaishnavi-resume.netlify.app/'> */}
        <button type='submit' value='send' className='submitBtn'>Send message</button>
        {/* </a> */}
        <div className='links'>
        <a href='https://www.linkedin.com/in/vaishnavi-gupta-09-june/' target='_blank'>
        <i  title='Linkedin Link'class="fa-brands fa-linkedin icons"/>
        </a>
        <a href='https://github.com/va-ishnavi' target='_blank'>
        <i title='GitHub Link'class="fa-brands fa-github icons"/>
        </a>
        <a href='mailto:vaishnavivaishnavigupta2204@gmail.com' target='_blank'>
        <i title='Gmail Link'class="fa-regular fa-envelope icons"/>
        </a>
        </div>
    </form>
    </section>
  )
}

export default Contact
