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
      <Link to='/' className='navbar-logo'>
        matteoprock
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        menu
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/apps' className='nav-links' onClick={closeMobileMenu}>
            Apps
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/videos' className='nav-links' onClick={closeMobileMenu}>
            Videos
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/music' className='nav-links' onClick={closeMobileMenu}>
            Music
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
