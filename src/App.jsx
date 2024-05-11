
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import VideoHero from './components/VideoHero';
import VideoHeroAbout from './components/VideoHeroAbout';
import VideoHeroComments from './components/VideoHeroComments';
import VideosNextList from './components/VideosNextList';

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
          <div className="VideoSelectAndNextDisplay">
            <div className="VideoHeroAboutCommentsCombo">
              <VideoHeroAbout video={currentVideo} />
              <VideoHeroComments comments={currentVideo.comments} />
            </div>
            <VideosNextList videos={videos} currentVideoId={currentVideoId} onVideoSelect={handleVideoSelect} />
          </div>
      </div>
  );
}

export default App;

