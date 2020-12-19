import React, { useState } from 'react';
import { Link} from 'react-scroll'
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <ul className={'nav-menu'}>
          <li className='nav-item'>
            <Link
            activeClass="active"
            to="aboutMeDiv"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1200}
            className='nav-links'
            >
              About Me
            </Link>
          </li>
          <li className='nav-item'>
            <Link
            activeClass="active"
            to="skillsDiv"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1200}
            className='nav-links'
            >
              Experience
            </Link>
          </li>
          <li className='nav-item'>
            <Link
            activeClass="active"
            to="projectsDiv"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1200}
            className='nav-links'
            >
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              activeClass="active"
              to="contactDiv"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1200}
              className='nav-links'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
