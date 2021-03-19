import React from 'react';
import { Link } from 'gatsby';
import Card from './Card';
import Polarjam from '../images/webPolarJam.png';
import Tapescape from '../images/tape.png';
import Canvai from '../images/canvai.png';
import './Starter.css';

export default function HomeComp() {
  return (
    <>
      {/* <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video> */}

      <div className='header2'>
        <h1>My name is Matteo</h1>
        <h1 className={'andIMake'}>and I make</h1>
        <div className='genres'>
          <Link to='/apps' style={{ textDecoration: 'none', color: 'white' }}>
            <div className={'andIMakeLeft move1'}>Apps</div>
          </Link>
          <Link to='/videos' style={{ textDecoration: 'none', color: 'white' }}>
            <div className={'andIMakeLeft move2'}>Videos</div>
          </Link>

          <Link to='/music' style={{ textDecoration: 'none', color: 'white' }}>
            <div className={'andIMakeLeft move1'}>Music</div>
          </Link>
        </div>
        <h1 className='takeA'>Take a look:</h1>
      </div>
      <div className='takeALook'>
        <Link to='/apps'>
          <Card
            bgColor={'#2898d4'}
            header={'SongColor'}
            desc={'Restructure songs by changing audio loops and experiment with sound'}
            img={Polarjam}
            alt={'Make music with people around the world without worrying about latency'}></Card>
        </Link>

        <Link to='/apps'>
          <Card
            bgColor={'#444c49'}
            header={'TapeScape'}
            desc={'Experience a journey through a world that is controlled by music'}
            img={Tapescape}
            alt={'Experience a journey through a world that is controlled by music'}></Card>
        </Link>

        <Link to='/music'>
          <Card
            bgColor={'#1f2833'}
            header={'Canvai'}
            desc={`Electro, House, Chill\nMusic on Youtube & Spotify`}
            img={Canvai}
            alt={'Electro, House, Chill\nMusic on Youtube & Spotify'}></Card>
        </Link>
      </div>
    </>
  );
}
