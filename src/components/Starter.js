import React from 'react';
import { Link } from 'gatsby';
import Card from './Card';
import Polarjam from '../images/webPolarJam.jpg';
import Tapescape from '../images/tape.jpg';
import Canvai from '../images/canvai.jpg';
import './Starter.css';

export default function HomeComp() {
  return (
    <>
      {/* <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video> */}

      <div className='header2'>
        <h1>Browse</h1>
        <h1>Projects</h1>
        <div className='genres'>
          <Link to='/apps' style={{ textDecoration: 'none', color: 'white' }}>
            <div className={'andIMakeLeft '}>Web</div>
          </Link>
          <Link to='/games' style={{ textDecoration: 'none', color: 'white' }}>
            <div className={'andIMakeLeft '}>Games</div>
          </Link>
          <Link to='/videos' style={{ textDecoration: 'none', color: 'white' }}>
            <div className={'andIMakeLeft '}>Videos</div>
          </Link>

          <Link to='/music' style={{ textDecoration: 'none', color: 'white' }}>
            <div className={'andIMakeLeft  '}>Music</div>
          </Link>
        </div>
        <h1 className='takeA'>Selected:</h1>
      </div>
      <div className='takeALook'>
        <Link to='/music' className='cardFirst lastElement'>
          <Card
            bgColor={'#1f2833'}
            header={'Canvai Music'}
            desc={`Electro, House, Chill\nMusic on Youtube & Spotify`}
            img={Canvai}
            alt={'Electro, House, Chill\nMusic on Youtube & Spotify'}></Card>
        </Link>

        <Link to='/apps' className='cardFirst'>
          <Card
            bgColor={'#2898d4'}
            header={'SongColor'}
            desc={'Restructure songs by changing audio loops and experiment with sound'}
            img={Polarjam}
            alt={'Make music with people around the world without worrying about latency'}></Card>
        </Link>

        <Link to='/games' className='cardFirst'>
          <Card
            bgColor={'#444c49'}
            header={'TapeScape'}
            desc={'Experience a journey through a world that is controlled by music'}
            img={Tapescape}
            alt={'Experience a journey through a world that is controlled by music'}></Card>
        </Link>
      </div>
    </>
  );
}
