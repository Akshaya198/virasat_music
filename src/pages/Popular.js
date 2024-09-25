import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Popular.css';
import track1 from '../imgs/tobalol.mp3';
import track2 from '../imgs/ghoom.mp3';
import track3 from '../imgs/mastmagan.mp3';
import albumCover1 from '../imgs/screen2.png'; // Add appropriate images for each track
import albumCover2 from '../imgs/screen3.png';
import albumCover3 from '../imgs/screen1.png';

const Popular = () => {
  const tracks = [
    { title: 'Tauba Tauba - Karun Aujla', src: track1, image: albumCover1 },
    { title: 'Ghoomar - Shreya Goshal,Swaroop Khan', src: track2, image: albumCover2 },
    { title: 'Mast Magan - Arijit Singh, Chinmayi', src: track3, image: albumCover3 },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = volume;
      audio.playbackRate = playbackRate;

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };

      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };

      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [volume, playbackRate]);

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    setIsPlaying(true);
  };

  const playPrevTrack = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
    );
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handlePlaybackRateChange = (event) => {
    setPlaybackRate(event.target.value);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    audio.currentTime = (event.target.value / 100) * duration;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div>
            <header className="header">
        <div className="logo">Virasat</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/classical">Classical</Link>
          <Link to="/others">Others</Link>
          <Link to="/regional">Regional</Link>
        </nav>
      </header>

    <div className="popular-page">
      {/* Header */}

      <div className='xx'>
        <center><h1>Bollywood Hits</h1></center>
      </div>
      <div className="container" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        <div className="music-player">
          <div className="cover">
            <img src={tracks[currentTrackIndex].image} alt="Album Cover" />
          </div>
          <div className="titre">
            <h1>{tracks[currentTrackIndex].title}</h1>
          </div>
          <div className="lecteur">
            <audio
              ref={audioRef}
              src={tracks[currentTrackIndex].src}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls
            >
              Your browser does not support the audio element.
            </audio>
          </div>

          {/* Volume Control */}
          <div className="volume-control">
            <label htmlFor="volume">Volume:</label>
            <input
              type="range"
              id="volume"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>

          {/* Playback Speed Control */}
          <div className="playback-rate-control">
            <label htmlFor="playbackRate">Speed:</label>
            <select
              id="playbackRate"
              value={playbackRate}
              onChange={handlePlaybackRateChange}
            >
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </div>

          {/* Navigation Buttons */}
          <div className="navigation">
            <button className="nav-button" onClick={playPrevTrack}>
              <i className="fa fa-step-backward fa-2x"></i>
            </button>
            <button className="nav-button" onClick={togglePlayPause}>
              {isPlaying ? (
                <i className="fa fa-pause fa-2x"></i>
              ) : (
                <i className="fa fa-play fa-2x"></i>
              )}
            </button>
            <button className="nav-button" onClick={playNextTrack}>
              <i className="fa fa-step-forward fa-2x"></i>
            </button>
          </div>
        </div>
 
        {/* Track List */}
 
        <div className="track-list">
        <div style={{padding:'30px',color:'white',backgroundColor:'#26510392',borderRadius:'30px'}}>
            <center><h2>Next In Line</h2></center>
          </div>
          
          <div style={{backgroundColor: '#513204d9'}}>
            <ul>
              {tracks.map((track, index) => (
                <li
                  key={index}
                  className={index === currentTrackIndex ? 'active' : ''}
                  onClick={() => setCurrentTrackIndex(index)}
                >
                  {track.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Home Button */}
      <center>
        <div className="home-button-container" style={{margin:'15px'}}>
          <button className="home-button">
            <Link to="/">Home</Link>
          </button>
        </div>
      </center>

      {/* Footer */}
    </div>
    <footer className="footer">
        <p>© 2024 Virasat Music. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Popular;
