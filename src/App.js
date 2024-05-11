// import Navbar from './components/Navbar';
import './App.css';

import React, { useState } from 'react';
import Navbar from './components/aNavbar/Navbar.jsx';
import VideoHero from './components/bHeroVideo/VideoHero.jsx';
import VideoHeroAbout from './components/cAboutVideo/VideoHeroAbout.jsx';
import VideoHeroAddComment from './components/dHeroAddComment/VideoHeroAddComment.jsx'
import VideoHeroComments from './components/eHeroComments/VideoHeroComments.jsx';
import VideosNextList from './components/fNextVideosList/VideosNextList.jsx';

import videos from './data/videos.json';
import videoDetails from './data/video-details.json';

function App() {
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);

  const currentVideo = videoDetails.find(video => video.id === currentVideoId);

  const handleVideoSelect = (id) => {
      setCurrentVideoId(id);
  };

  return (
      <div className="app">
          <Navbar />
          <VideoHero video={currentVideo} />
          <body>
          <div className="VideoSelectAndNextDisplay">
            <div className="VideoHeroAboutCommentsCombo">
              <VideoHeroAbout video={currentVideo} />
              <VideoHeroAddComment commentsCount={currentVideo.comments.length} />
              <VideoHeroComments comments={currentVideo.comments} />
            </div>
            <VideosNextList videos={videos} currentVideoId={currentVideoId} onVideoSelect={handleVideoSelect} />
          </div>
          </body>
      </div>
  );
}

export default App;


