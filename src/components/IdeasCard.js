import React from 'react';
import './IdeasCard.css';

export default function IdeasCard({ header, song, bgColor }) {
  return (
    <div style={{ backgroundColor: bgColor }} className='cardContainerIdeas'>
      {header}
      <audio controls autoplay src={song}></audio>
    </div>
  );
}
