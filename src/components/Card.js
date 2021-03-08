import React from 'react';
import './Card.css';

export default function Card({ header, desc, img, bgColor, alt }) {
  return (
    <div style={{ backgroundColor: bgColor }} className='cardContainer'>
      <div className='describeContainer'>
        <h2 style={{ marginBottom: '20px' }}>{header}</h2>
        <p>{desc}</p>
      </div>
      <img className='pic' src={img} alt={alt}></img>
    </div>
  );
}
