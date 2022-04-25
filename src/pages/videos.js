import React from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import './videos.css';
import SEO from '../components/seo';

export default function videos() {
  return (
    <Layout>
      <SEO></SEO>
      <Navbar></Navbar>
      <Headline headline={'Videos'}>
        <h1 style={{ padding: '0px 20px' }}>stories, trailers, events</h1>
        <div className='videoAndDesc'>
          <div>
            <div className='video-container-wrapper'>
              {/* <div className='video-container'>
                <iframe
                  title='mark'
                  src='https://player.vimeo.com/video/129810374'
                  width='640'
                  height='360'
                  frameBorder='0'
                  allow='autoplay; fullscreen; picture-in-picture'
                  allowFullScreen></iframe>
              </div> */}
              <div className='video-container'>
                <iframe
                  title='pp multitouch'
                  src='https://player.vimeo.com/video/200031345'
                  width='560'
                  height='315'
                  frameBorder='0'
                  allow='autoplay; fullscreen; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
              <div className='video-container'>
                <iframe
                  title='sommeruni'
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/zfK2pyDSE8M'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
              <div className='video-container'>
                <iframe
                  title='micropia'
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/ZxVbTRnolPg'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
              <div className='video-container'>
                <iframe
                  title='my sister'
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/5zSn8rtCQ54'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
              <div className='video-container'>
                <iframe
                  title='salsa libre'
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/rP4jyzU1ChM'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
              <div className='video-container'>
                <iframe
                  title='karriere'
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/Xtea2ocNWqY'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>

              <div className='video-container lastElement'>
                <iframe
                  title='the music in my head'
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/9Qbg_YxkDDI'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className='videoDesc'>
            {/* <div className='videoDescItem'>
              <h2>Kirchentag Stuttgart</h2>
              <p className='videoText'>
                A TV report for the evangelical church congress in Stuttgart. During the internship
                we filmed and interviewed many visitors and politicians for TV and Web.
              </p>
            </div> */}
            <div className='videoDescItem'>
              <h2>p&p MultiTouch</h2>
              <p className='videoText'>
                During my internship in the advertising agency "p&p marketing" my task was to plan
                and realize a product video about their intuitive
                <br></br>
                touch device.
              </p>
            </div>
            <div className='videoDescItem'>
              <h2>Children University</h2>
              <p className='videoText'>
                A highlight video about the Children University summer program with several events{' '}
                <br></br> in Innsbruck.
              </p>
            </div>
            <div className='videoDescItem'>
              <h2>Micropia</h2>
              <p className='videoText'>
                A trailer for Micropia, a museum of its kind. Displaying the invisible world of
                micro-organisms in Amsterdam, The Netherlands.
              </p>
            </div>
            <div className='videoDescItem'>
              <h2>My Sister</h2>
              <p className='videoText'>
                A short story about two sisters filmed during my studies at the Medienkolleg
                Innsbruck. Prepare a tissue for some tears!
              </p>
            </div>
            <div className='videoDescItem'>
              <h2>Salsa Libre</h2>
              <p className='videoText'>
                Every year, the Salsa Libre festival is inviting people to dance. I joined the party
                and captured some impressions.
              </p>
            </div>
            <div className='videoDescItem'>
              <h2>career & competence</h2>
              <p className='videoText'>
                Many exhibitors are present at this annual trade fair. The earlier you start looking
                for your dream job, the better!
              </p>
            </div>
            <div className='videoDescItem'>
              <h2>The music in my head</h2>
              <p className='videoText'>
                Short movie I made as a graduating project from the Medienkolleg Innsbruck.<br></br>{' '}
                A story about music, memories <br></br>and letting go.
              </p>
            </div>
          </div>
        </div>
      </Headline>
    </Layout>
  );
}
