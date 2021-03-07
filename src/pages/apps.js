import React from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import WebCard from '../components/WebCard';
import Polarjam from '../images/webPolarJam.png';
import OnlyDrops from '../images/webOnlyDrops.png';
import MoveAndWork from '../images/webMoveAndWork.png';
import Tapescape from '../images/tapescapeBig.png';
import './apps.css';
import ContentLayout from '../components/ContentLayout';

export default function apps() {
  return (
    <Layout>
      <Navbar></Navbar>
      <Headline headline={'Apps'}>
        <ContentLayout>
          <h1>creative and interactive</h1>
          <div className='webProjectsHolder'>
            <a target='blank' href='https://polarjam.com'>
              <WebCard
                bgColor={'rgb(173, 203, 233)'}
                header={'PolarJam'}
                alt='polarJam'
                desc={'Make music with people around the world without worrying about latency'}
                img={Polarjam}
                tech={'React, Tone.js, Socket.io'}
                portfolio={false}
                techColor='white'></WebCard>
            </a>
            <a target='blank' href='https://onlydrops.com'>
              <WebCard
                alt='onlyDrops'
                bgColor={'#90d1db'}
                header={'OnlyDrops'}
                desc={'A platform to discover and share the best drops'}
                img={OnlyDrops}
                tech={'Angular, Firebase'}
                portfolio={false}
                techColor='white'></WebCard>
            </a>
            <a target='blank' href='https://mortenblaa.itch.io/tapescape'>
              <WebCard
                alt='onlyDrops'
                bgColor={'#063346'}
                header={'Tapescape'}
                desc={'Experience a journey through a world that is controlled by music'}
                img={Tapescape}
                tech={'Unity'}
                techColor='white'
                portfolio={false}></WebCard>
            </a>
            <a target='blank' href='https://moveand.work'>
              <WebCard
                alt='moveAndWork'
                bgColor={'#7f8b4c'}
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
