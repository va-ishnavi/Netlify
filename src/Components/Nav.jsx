
import React from 'react';
import './Nav.css';
import logo from './../asset/v.png';
import {Link} from 'react-scroll';
//import menu from '

const Nav = () => {
  return (
      <div className='navbar '>
       <img src={logo} alt='logo' className='Logo' />
          <div className="desktopmenu "> 
               <Link activeClass='active'  to='intro' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem '>Home</Link>
               <Link activeClass='active'  to='about' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem'>About</Link>
               <Link activeClass='active'  to='skills' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem'>Skills</Link>
               <Link activeClass='active'  to='projects' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem'>Projects</Link>
          </div>
          {/* <div className='desktopMenubtn' onClick={()=> */}
          {/* document.getElementById(contact).scrollIntoView(behavior:"smooth")}> */}
          <button className='Button '>contact me</button>
          {/* </div> */}

          {/* <img src={menu} alt='Menu' className='MobileMenu' /> */}
          <div className="navmenu "> 
               <Link activeClass='active'  to='intro' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem '>Home</Link>
               <Link activeClass='active'  to='about' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem'>About</Link>
               <Link activeClass='active'  to='skills' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem'>Skills</Link>
               <Link activeClass='active'  to='projects' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem'>Projects</Link>
          </div>
        </div>
    
  )
}

export default Nav;