import React from 'react'
import './Intro.css';
import {Link} from 'react-scroll';

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
          <p className='para'>I'm a full-stack developer and here is my portfolio website. On this site, 
          you'll find a showcase of my projects, where I blend creativity with technical expertise 
          to craft engaging digital experiences.
         </p>
         <Link ><button className="Btn" >Hire Me</button> </Link>
         <Link ><button className="Btn2" >Resume</button> </Link>
       </div>
    </section>
  )
}

export default Intro;