
import React, { useState } from 'react';
import './Nav.css';
import logo from './../asset/v.png';
import {Link} from 'react-scroll';
import menu from './../asset/mob.png';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
      <nav className='navbar '>
       <img src={logo} alt='logo' className='Logo' />
          <div className="desktopmenu "> 
          {/* <a href='#intro' className='MenuListItem'> Home </a> */}
               <Link activeClass='active'  to='intro' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem '>Home</Link>
               <Link activeClass='active'  to='about' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem'>About</Link>
               <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem'>Skills</Link>
               <Link activeClass='active'  to='projects' spy={true} smooth={true} offset={-100} duration={500}  className='MenuListItem'>Projects</Link>
          </div>
          <button className='button' onClick={()=> {
              document.getElementById('contact').scrollIntoView({behavior:'smooth'});
          }}> Contact</button>
          {/* BurgerMenu */}
          <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
          <div className="navMenu" style={{display:showMenu? 'flex':'none'}}> 
               <Link activeClass='active'  to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
               <Link activeClass='active'  to='about' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
               <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Skills</Link>
               <Link activeClass='active'  to='projects' spy={true} smooth={true} offset={-100} duration={500}  className='ListItem' onClick={()=>setShowMenu(false)}>Projects</Link>
               <Link activeClass='active'  to='contact' spy={true} smooth={true} offset={-100} duration={500}  className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
          </div>
        </nav>
  )
}

export default Nav;