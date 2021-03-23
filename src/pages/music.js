import React from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';
import Spotify from '../images/spotify.svg';
import './music.css';

export default function music() {
  return (
    <Layout>
      <SEO></SEO>
      <Navbar></Navbar>
      <Headline headline={'Music'}>
        <h1 style={{ padding: '0px 20px' }}>take a listen on Youtube or Spotify</h1>
        <p className='beats'>
          Almost 10 years ago, I made my first song in a music program on a computer. Since then, I
          have been hooked and tried out different genres and styles.
        </p>

        <div class='video-container-wrapper-music'>
          <div class='video-container-music'>
            <iframe
              title='shine'
              width='360px'
              height='203px'
              src='https://www.youtube.com/embed/YV2X0JkhmWM'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </div>
          <div class='video-container-music'>
            <iframe
              title='fly away'
              width='360px'
              height='203px'
              src='https://www.youtube.com/embed/TrL_uG8fPU4'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </div>
          <div class='video-container-music'>
            <iframe
              title='valley'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/3PCNhdpNNSI'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </div>
          <a target='blank' href='https://open.spotify.com/album/4wkOxGefMQbCpuvW0tM9jL'>
            <div className='iconHolder'>
              <h2 style={{ color: 'white', marginRight: '33px' }}>Spotify</h2>
              <img className='spotify' src={Spotify} alt='Spotify Icon'></img>
            </div>
          </a>
        </div>
      </Headline>
    </Layout>
  );
}
