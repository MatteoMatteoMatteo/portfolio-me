import React from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import './videos.css';
import SEO from '../components/seo';

export default function tapescape() {
  return (
    <Layout>
      <SEO></SEO>
      <Navbar></Navbar>
      <Headline headline={'Videos'}>
        <h1 style={{ padding: '0px 20px' }}>stories, trailers, events</h1>

        <div class='video-container-wrapper'>
          <div class='video-container'>
            <iframe
              title='mark'
              src='https://player.vimeo.com/video/129810374'
              width='640'
              height='360'
              frameborder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowfullscreen></iframe>
          </div>
        </div>
      </Headline>
    </Layout>
  );
}
