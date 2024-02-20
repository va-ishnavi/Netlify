import React from 'react'
import './skills.css';
import img1 from '../asset/html5.jpg';
import img2 from '../asset/css.jpg';
import img3 from '../asset/Js.png';
import img4 from '../asset/react.png';
import img5 from '../asset/nodejs.png';
import img6 from '../asset/next.png';
import img7 from '../asset/bootstrap.png';
import img8 from '../asset/tailwindcss.png';
import img9 from '../asset/github.png';
import img10 from '../asset/mongodb.png';

const Skills = () => {
  return (
    <section id='skills'> 
      <span className='skillTitle'>Skills</span>
      <span className='skillDesc'>As a Full Stack Developer, I possess a comprehensive understanding of both front-end and back-end technologies, 
      enabling me to build dynamic and interactive web applications from start to finish and using different programming languages, tools, 
      and frameworks to build all parts of a website.
      </span>
      <div className="skillBars">
        <div className="skillBarText">
          <h2>Frontend Development</h2>
          <p>In Front-end Development, I'm really good at using HTML, CSS, and JavaScript to create the parts of websites that people see and interact with. 
            I know how to make websites look nice and work well on different devices, like phones and computers.</p>
        </div>
        <div className="skillBarText">
          <h2>Backend Development</h2>
          <p>In Back-end Development, I'm using languages like Node.js, Ruby, or Java to build the behind-the-scenes part of websites. 
            This includes frameworks like Express.js, Django, Flask, or Spring Boot, which help me write code more efficiently. </p>
        </div>
      </div>
      <div className="skillImgs">
        <img src={img1} alt='' className='skillImg' />
        <img src={img2} alt='' className='skillImg'/>
        <img src={img3} alt='' className='skillImg'/>
        <img src={img4} alt='' className='skillImg'/>
        <img src={img5} alt='' className='skillImg'/>
        <img src={img6} alt='' className='skillImg'/>
        <img src={img7} alt='' className='skillImg'/>
        <img src={img8} alt='' className='skillImg'/>
        <img src={img9} alt='' className='skillImg'/>
        <img src={img10} alt='' className='skillImg'/>

      </div>
    </section>
  )
}

export default Skills;