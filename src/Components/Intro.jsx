import React from 'react'
import './Intro.css';

const Intro = () => {
  return (
    <section id="intro">
       <div className='introcontent '>
          <span className='hello'>I'm  </span>
          <div  className='introtext mb-2'>
          <li><span className='name'>Vaishnavi Gupta</span></li>
          <li><span>Front-end Developer</span></li>
          <li><span>Full Stack Developer</span></li>
          </div>
          <p className='para'>I have obtained a certification in Python and multi-threading using Java from Scaler Academy.<br/>
            I possess programming skills with a good knowledge of HTML, CSS and JavaScript.
         </p>

       </div>
          

         <div className="Btn">
          <button>Hire Me</button>
          </div>
    </section>
  )
}

export default Intro;