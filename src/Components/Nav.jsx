
import React from 'react';
import './Nav.css';
import logo from './../asset/v.png';
import {Link} from 'react-scroll';

const Nav = () => {
  return (
    
        <div className='navbar '>
        
       <img src={logo} alt='logo' className='Logo' />
          <div className="desktopmenu "> 
               <Link className='MenuListItem '>Home</Link>
               <Link className='MenuListItem'>About</Link>
               <Link className='MenuListItem'>Skills</Link>
               <Link className='MenuListItem'>Projects</Link>
          <button className='Button '>
            contact me
          </button>
          </div>
        </div>
    
  )
}

export default Nav;