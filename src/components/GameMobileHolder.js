import React from 'react';
import './GameMobileHolder.css';

export default function GameMobileHolder({ gif, title, text, tech, techInfo, bgColor }) {
  return (
    <div className='gameHolder'>
      <div className='gameGifHolder' style={{ background: bgColor }}>
        <img className='gif' src={gif}></img>
      </div>
      <div className='gameInfoHolder' style={{ background: bgColor }}>
        <h2>{title}</h2>
        <p style={{ marginTop: '20px', marginBottom: '20px' }}>{text}</p>
        <p style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>{tech}</p>
        {techInfo ? <p style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>{techInfo}</p> : null}
      </div>
    </div>
  );
}
