import React from 'react';
import './Footer.css';
import { Link } from 'gatsby';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id='footerContainer'>
      <div className='contactLink'>© {year}</div>
    </footer>
  );
}
