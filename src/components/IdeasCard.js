import React from 'react';
import './IdeasCard.css';

export default function IdeasCard({ header, song, bgColor, volume }) {
  return (
    <div style={{ backgroundColor: bgColor }} className='cardContainerIdeas'>
      <span style={{ marginBottom: '8px' }}> {header}</span>

      <audio controls volume={volume} controlsList={'nodownload'} src={song}></audio>
    </div>
  );
}
