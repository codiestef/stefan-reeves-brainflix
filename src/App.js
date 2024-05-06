// import Navbar from './components/Navbar';
import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import VideoHero from './components/VideoHero';
import VideoHeroAbout from './components/VideoHeroAbout';
import VideoHeroComments from './components/VideoHeroComments';
import VideosNextList from './components/VideosNextList';

import videos from './data/videos.json';
import videoDetails from './data/video-details.json';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//     </div>
//   );
// }

// export default App;

function App() {
  // State for the current video ID
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);

  // Find the current video details
  const currentVideo = videoDetails.find(video => video.id === currentVideoId);

  // Handle video selection from the sidebar
  const handleVideoSelect = (id) => {
      setCurrentVideoId(id);
  };

  return (
      <div className="app">
          <Navbar />
          <VideoHero video={currentVideo} />
          <VideoHeroAbout video={currentVideo} />
          <VideoHeroComments comments={currentVideo.comments} />
          <VideosNextList videos={videos} currentVideoId={currentVideoId} onVideoSelect={handleVideoSelect} />
      </div>
  );
}

export default App;


