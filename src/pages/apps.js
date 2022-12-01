import React from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import WebCard from '../components/WebCard';
import Polarjam from '../images/webPolarJam.jpg';
import OnlyDrops from '../images/webOnlyDrops.jpg';
import MoveAndWork from '../images/webMoveAndWork.jpg';
import Tapescape from '../images/tapescapeBig.jpg';
import './apps.css';
import ContentLayout from '../components/ContentLayout';
import SEO from '../components/seo';

export default function apps() {
  return (
    <Layout>
      <SEO></SEO>
      <Navbar></Navbar>
      <Headline headline={'Web Apps'}>
        <ContentLayout>
          <h1>creative and interactive</h1>
          <div className='webProjectsHolder'>
            <a className='webCard' target='blank' href='sad-bardeen-282cfb.netlify.app'>
              <WebCard
                bgColor={'#2898d4'}
                header={'SongColor'}
                alt='polarJam'
                desc={'Restructure songs by changing audio loops and experiment with sound'}
                img={Polarjam}
                tech={'React, Tone.js'}
                portfolio={false}
                techColor='white'></WebCard>
            </a>
            <a className='webCard' target='blank' href='https://awesome-jepsen-e757f5.netlify.app/'>
              <WebCard
                alt='onlyDrops'
                bgColor={'#1f2833'}
                header={'OnlyDrops'}
                desc={'A platform to discover and share the best beat drops'}
                img={OnlyDrops}
                tech={'Angular, Firebase'}
                portfolio={false}
                techColor='white'></WebCard>
            </a>

            <a
              className='webCard'
              target='blank'
              href='https://awesome-nightingale-3b2756.netlify.app/'>
              <WebCard
                alt='moveAndWork'
                bgColor='linear-gradient(to right, #155799, #159957)'
                header={'Move & Work'}
                desc={'An hourly reminder to strech and move while you are working'}
                img={MoveAndWork}
                portfolio={false}
                tech={'React'}
                techColor='white'></WebCard>
            </a>
          </div>
        </ContentLayout>
      </Headline>
    </Layout>
  );
}
