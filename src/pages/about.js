import React from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import './about.css';
import ContentLayout from '../components/ContentLayout';
import SEO from '../components/seo';
import Me from '../images/me.jpg';

export default function about() {
  return (
    <Layout>
      <SEO></SEO>
      <Navbar></Navbar>
      <Headline headline={'Me'}>
        <ContentLayout>
          <div className='contactHolder'>
            {/* <img className={'meImage'} src={Me} alt='me'></img> */}
            <h3 style={{ fontSize: '1.4rem' }} className='aboutHolder'>
              After my studies in Innsbruck at the Medienkolleg and the MCI, I'm recently finished
              my Master's Degree in Interactive Media at the University of Applied Sciences Upper
              Austria.
            </h3>
            <h3 style={{ fontSize: '1.4rem' }} className='aboutHolder'>
              Other than that I like to work on projects that I share here. <br></br>If you have any
              question or just want to chat, send me a message!
            </h3>
            <h3 style={{ fontSize: '1.4rem' }} className='aboutHolder lastAbout'>
              m.prock@outlook.com
            </h3>
          </div>
        </ContentLayout>
      </Headline>
    </Layout>
  );
}
