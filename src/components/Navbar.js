import React, { useState } from 'react';
import { Link} from 'react-scroll'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        
        <strong className="navbar-logo" onClick={closeMobileMenu}
>          Shane Benlolo
        </strong>
        
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link
            activeClass="active"
            to="aboutMeDiv"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className='nav-links'
            onClick={closeMobileMenu}
            >
              About Me
            </Link>
          </li>
          <li className='nav-item'>
            <Link
            activeClass="active"
            to="projectsDiv"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className='nav-links'
            onClick={closeMobileMenu}
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
              offset={-70}
              duration={1200}
              className='nav-links'
              onClick={closeMobileMenu}
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
