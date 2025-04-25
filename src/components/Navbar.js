import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', showButton);
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbarWrapper'>
        <Link to='/' className='navbar-logo'>
          Canvai
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          menu
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/music' className='nav-links' onClick={closeMobileMenu}>
              Music
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/apps' className='nav-links' onClick={closeMobileMenu}>
              Web
            </Link>
          </li>
          {/* <li className='nav-item'>
            <Link to='/ideas' className='nav-links' onClick={closeMobileMenu}>
              Ideas
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
