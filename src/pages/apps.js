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
      <Headline headline={'Apps'}>
        <ContentLayout>
          <h1>creative and interactive</h1>
          <div className='webProjectsHolder'>
            <a target='blank' href='https://songcolor.com'>
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
            <a target='blank' href='https://onlydrops.com'>
              <WebCard
                alt='onlyDrops'
                bgColor={'#a46260'}
                header={'OnlyDrops'}
                desc={'A platform to discover and share the best drops'}
                img={OnlyDrops}
                tech={'Angular, Firebase'}
                portfolio={false}
                techColor='white'></WebCard>
            </a>

            <a target='blank' href='https://moveand.work'>
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
            <a target='blank' href='https://mortenblaa.itch.io/tapescape'>
              <WebCard
                alt='tapescape'
                bgColor={'#063346'}
                header={'Tapescape'}
                desc={'Experience a journey through a world that is controlled by music'}
                img={Tapescape}
                tech={'Unity'}
                techColor='white'
                portfolio={false}></WebCard>
            </a>
          </div>
        </ContentLayout>
      </Headline>
    </Layout>
  );
}
