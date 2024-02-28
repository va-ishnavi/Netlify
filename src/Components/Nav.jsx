
import React from 'react';
import './Nav.css';
import logo from './../asset/v.png';
import {Link} from 'react-scroll';

const Nav = () => {
  return (
      <div className='navbar '>
       <img src={logo} alt='logo' className='Logo' />
          <div className="desktopmenu "> 
               <Link activeClass='active'  to='intro' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem '>Home</Link>
               <Link className='MenuListItem'>About</Link>
               <Link className='MenuListItem'>Skills</Link>
               <Link className='MenuListItem'>Projects</Link>
          </div>
          <div className=''></div>
          <button className='Button '>contact me</button>
        </div>
    
  )
}

export default Nav;