import React from 'react';
import './WebCard.css';

export default function WebCard({ header, desc, img, bgColor, tech, portfolio, alt, techColor }) {
  return portfolio ? null : (
    <div className='webCardContainer'>
      <img className='webPic' src={img} alt={alt}></img>
      <div className='none'></div>
      <div className='describeWebContainer' style={{ background: bgColor }}>
        <h2 className={'webItemDesc'} style={{ marginBottom: '20px' }}>
          {header}
        </h2>

        <p className={'webItemDescMain'}> {desc}</p>
        <p style={{ color: techColor ? techColor : null }} className={'webItemDesc tech'}>
          {tech}
        </p>
      </div>
    </div>
  );
}
