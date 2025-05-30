import React, { useState, useEffect } from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';
import Spotify from '../images/spotify.svg';
import { Link } from 'gatsby';
import './music.css';

export default function music() {
  return (
    <Layout>
      <SEO></SEO>
      <Navbar></Navbar>
      <Headline headline={'Music'}>
        <Link to='/ideas' className='unreleased'>
          <span>--> Unfinished Ideas</span>
        </Link>

        {/* <h1 style={{ padding: '0px 20px' }}>take a listen on Youtube or Spotify</h1>
        <p className='beats'>
          10 years ago, I made my first song on a computer. Now, all my released music can be found
          on my youtube channel, here is a selection.
        </p> */}

        <div class='video-container-wrapper-music'>
          <div class='video-container-music'>
            <iframe
              title='shine'
              width='360px'
              height='203px'
              src='https://www.youtube.com/embed/YV2X0JkhmWM'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
          <div class='video-container-music'>
            <iframe
              title='fly away'
              width='360px'
              height='203px'
              src='https://www.youtube.com/embed/TrL_uG8fPU4'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
          <div class='video-container-music'>
            <iframe
              title='valley'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/3PCNhdpNNSI'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
          <a target='blank' href='https://open.spotify.com/artist/0WEzvWCA6Xw840ntIhahni'>
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
