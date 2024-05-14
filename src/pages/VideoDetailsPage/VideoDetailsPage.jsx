import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoHero from '../../components/bHeroVideo/VideoHero';
import VideoHeroAbout from '../../components/cAboutVideo/VideoHeroAbout';
import VideoHeroAddComment from '../../components/dHeroAddComment/VideoHeroAddComment';
import VideoHeroComments from '../../components/eHeroComments/VideoHeroComments';
import VideosNextList from '../../components/fNextVideosList/VideosNextList';

// import './VideoDetailPage.scss';

// const API_BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const apiKey = "fce97f0a-b3c2-45c8-b436-63a06132b237";

function VideoDetailPage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videosResponse = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${apiKey}`);
        setVideos(videosResponse.data);
        
        const videoId = id || videosResponse.data[0].id;
        const videoDetailsResponse = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=${apiKey}`);
        setSelectedVideo(videoDetailsResponse.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchData();
  }, [id]);

  const filteredVideos = videos.filter(video => video.id !== selectedVideo?.id);

  return (
    <div className="video-detail-page">
      {selectedVideo ? (
        <>
            <VideoHero video={selectedVideo} />
          <div className="VideoSelectAndNextDisplay">
            <div className="VideoHeroAboutCommentsCombo">
              <VideoHeroAbout video={selectedVideo} />
              <VideoHeroAddComment commentsCount={selectedVideo.comments.length} />
              <VideoHeroComments comments={selectedVideo.comments} />
            </div>
            <VideosNextList videos={filteredVideos} />
          </div>
        </>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default VideoDetailPage;