import React from 'react'
import './about.css';
import Img1 from './../asset/IGNOU.jpg';
import Img2 from './../asset/scaler.png';
import Img3 from './../asset/alma.jpg';

const About = () => {
  return (
    <section id="about">
      <span className='aboutTitle'>About Me</span>
      <span className='aboutDesc'>I complete my Bachelor of Computer Applications (BCA) from Indira Gandhi National Open University (IGNOU).
        Additionally, I have obtained a certification in Python and Multi-threading using Java from Scaler Academy. And also
        certification in Full Stack Web Development from Alma Better.
      </span>
      <div className='aboutBars'>
        <div className='aboutBar'>
          <img src={Img1} alt='Ignou' className='aboutBarImg' />
          <div className="aboutBarText">
            <h2>IGNOU</h2>
            <p>Bachelor of Computer Applications </p>
          </div>
        </div>
      </div>
      <div className='aboutBars'>
        <div className='aboutBar'>
          <img src={Img2} alt='Scaler Academy' className='aboutBarImg' />
          <div className="aboutBarText">
            <h2>Scaler Academy</h2>
            <p> Certification in Python and Multi-threading using Java</p>
          </div>
        </div>
      </div>
      <div className='aboutBars'>
        <div className='aboutBar'>
          <img src={Img3} alt='Alma Better' className='aboutBarImg' />
          <div className="aboutBarText">
            <h2>Alma Better</h2>
            <p>Full Stack Web Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;