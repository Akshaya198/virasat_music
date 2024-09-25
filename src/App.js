import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import saraswati from './imgs/Saraswati.jpeg';
import tyagImage from './imgs/tyag.jpeg';
import hindImage from './imgs/hind.jpeg';
import hImage from './imgs/d2.jpeg';
import Image from './imgs/trad.jpeg';
import hin from './imgs/d1.jpeg';

const NavBar = () => {
  return (
    <nav className="sticky-nav">
      <div className="logo">Virasat</div>
      <div className="nav-links">
        <a href="#classical">Classical</a>
        <a href="#other-categories">Others</a>
        <a href="#regional">Regional</a>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <div className='x'>
        <NavBar />
        <div id='intro' className="intro">
          <center style={{ flex:'0.4',padding: '45px', fontSize: '50px' }}><h>Explore India's Music</h></center>
          <center><div className="inner" style={{ padding: '3vw', borderRadius: '30px' }}>
            <p style={{fontSize:'clamp(0.8rem, 1.2vw, 1.5rem)'}}>
              Indian music is a vibrant tapestry reflecting the country’s rich cultural heritage, encompassing classical, folk, devotional, and contemporary genres. It includes two major classical traditions: Hindustani music from the North, known for its intricate ragas and improvisation, and Carnatic music from the South, celebrated for its complex rhythms and devotional themes. Beyond these, Indian music features a diverse range of folk styles, from Rajasthan’s Manganiyar ballads to Assam’s Bihu tunes. Devotional music includes bhajans, kirtans, and qawwalis, which are integral to spiritual practices. Bollywood music blends classical, folk, and modern elements, playing a crucial role in Indian cinema. Contemporary and pop music, often influenced by global trends, continues to evolve with fusion genres that mix traditional Indian sounds with international styles. This dynamic diversity highlights India's rich musical landscape and its ongoing evolution.
            </p>
          </div></center>
        </div>
      </div>
      
      {/* Classical Music Div */}
      <div id='classical' className="classical-music-section">
        <div className="classical-title" >
          <div style={{padding:'10px'}}>
            <center><h2 >Classical Music</h2></center>
          </div>
          <div className="Saras" >
            <img src={saraswati} alt="Saraswati" style={{width:'90%', padding:'10px',borderRadius: '30px' }} />
          </div>
        </div>
        <div className="music-cards-class">
          <div className="music-card-hindustani" >
            <div className="card-inner">
              <div className="card-front" style={{ backgroundImage: `url(${hindImage})` }}>
                <h2 className="card-title">Hindustani</h2>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>Hindustani</h2>
                  <p>Hindustani music, a classical tradition from North India, is renowned for its intricate melodic structures and improvisational depth. Rooted in ancient Vedic chants and Persian influences, it emphasizes the expression of ragas (melodic frameworks) and talas (rhythmic cycles) through elaborate improvisations and compositions. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="music-card-carnatic" >
            <div className="card-inner">
              <div className="card-front" style={{ backgroundImage: `url(${tyagImage})` }}>
                <h2 className="card-title">Carnatic</h2>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>Carnatic</h2>
                  <p style={{ fontSize: 'medium', color: 'white' }}>Carnatic music, a classical tradition from South India, is known for its intricate rhythms and melodic sophistication. Rooted in ancient Vedic chants, it emphasizes improvisation and complex structures, often centered around devotional themes. The music is typically performed by a vocalist accompanied by a variety of instruments, including the violin, mridangam, and ghatam. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Categories Div */}
      <div id='other-categories' className="other-categories-section">
        <div className='inner-other' style={{ alignContent: 'center' }}>
          <h2 style={{ marginLeft: '600px', marginRight: '600px', fontSize: '30px' }}>Other Categories</h2>

          <p style={{ paddingLeft: '50px', paddingRight: '50px' }}>Dive into the vibrant world of Indian music by exploring diverse genres like devotional chants, folk melodies, and Bollywood hits. Each style offers a unique journey into the rich cultural tapestry of India.Exploring Indian music reveals a rich tapestry of genres, each offering a unique cultural experience. Devotional music, with its bhajans and qawwalis, evokes spiritual connection through heartfelt chants and rhythms. Folk music, rooted in tradition, brings vibrant stories and regional flavors to life with its diverse styles and instruments. Contemporary music embraces modern influences, blending traditional sounds with global trends to create fresh, innovative rhythms. Bollywood music, an integral part of Indian cinema, captivates with its catchy tunes and elaborate production, merging classical and contemporary elements into dynamic and engaging compositions. Each genre invites listeners to discover the depth and diversity of India's musical heritage.</p>
        </div>
        <div className="music-cards" style={{ flex: '0.6' }}>
          <div className="music-card" >
            <div className="card-inner">
              <div className="card-front">
                <h2 className="card-title">Folk</h2>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>Folk</h2>
                  <p>Discover the vibrant folk traditions of various regions in India.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="music-card" >
            <div className="card-inner">
              <div className="card-front" style={{ backgroundImage: `url(${hImage})` }}>
                <h2 className="card-title">Devotional</h2>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>Devotional</h2>
                  <p>Listen to the soul-stirring devotional songs and chants.</p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/popular" className="music-card" >
            <div className="card-inner">
              <div className="card-front" style={{ backgroundImage: `url(${Image})` }}>
                <h2 className="card-title">Bollywood</h2>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>Bollywood</h2>
                  <p>Dive into Bollywood hits and popular Indian music.</p>
                </div>
              </div>
            </div>
          </Link>
          <div className="music-card" >
            <div className="card-inner">
              <div className="card-front" style={{ backgroundImage: `url(${hin})` }}>
                <h2 className="card-title">Contemporary</h2>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>Contemporary</h2>
                  <p>Experience innovative blends in contemporary music.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Music Div */}
      <div id='regional' className="regional-music-section">
        <div className="music-cards">
          <div className="music-card">
            <div className="card-inner">
              <div className="card-front">
                <h2 className="card-title">Regional Category 1</h2>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>Regional Category 1</h2>
                  <p>Explore unique musical traditions from Region 1.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="music-card">
            <div className="card-inner">
              <div className="card-front">
                <h2 className="card-title">Regional Category 2</h2>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>Regional Category 2</h2>
                  <p>Explore unique musical traditions from Region 2.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="music-card">
            <div className="card-inner">
              <div className="card-front">
                <h2 className="card-title">Explore More</h2>
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h2>Explore More</h2>
                  <p>Dive into more regional music traditions across India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plate">
          <div><center><h2>Regional Music</h2></center>
            <p style={{ padding: '10px' }}>Regional Indian music offers a fascinating glimpse into the country's diverse cultural landscape, with each region presenting its unique sounds and styles. From the soulful melodies of the Punjabi dhol to the intricate rhythms of Tamil folk music, regional tunes capture the essence of local traditions, festivals, and everyday life. </p></div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Virasat Music. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

/*
        <div className="music-cards">
          <div className="music-card" style={{ width: '350px', height: '500px' }}>
            <div className="card-inner">
              <div className="card-front" style={{ backgroundImage: `url(${hindImage})` }}>
                <h2 className="card-title">Hindustani</h2>

          <div className="music-card" style={{ width: '350px', height: '500px' }}>
            <div className="card-inner">
              <div className="card-front" style={{ backgroundImage: `url(${tyagImage})` }}>
                <h2 className="card-title">Carnatic</h2>
              </div>

music-card style={{ width: '280px', height: '300px' }}

     <div style={{ flex: 0.8 }}>
            <img src={saraswati} alt="Saraswati" style={{ width: '350px', height: 'auto', borderRadius: '30px' }} />
          </div>



          
*/