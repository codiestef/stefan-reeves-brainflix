import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoHero from '../../components/bHeroVideo/VideoHero';
import VideoHeroAbout from '../../components/cAboutVideo/VideoHeroAbout';
import VideoHeroAddComment from '../../components/dHeroAddComment/VideoHeroAddComment';
import VideoHeroComments from '../../components/eHeroComments/VideoHeroComments';
import VideosNextList from '../../components/fNextVideosList/VideosNextList';

function VideoDetailPage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videosResponse = await axios.get(`http://localhost:5050/videos`);
        setVideos(videosResponse.data);

        const videoId = id || videosResponse.data[0].id;
        const videoDetailsResponse = await axios.get(`http://localhost:5050/videos/${videoId}`);
        setSelectedVideo(videoDetailsResponse.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const filteredVideos = videos.filter(video => video.id !== selectedVideo?.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!selectedVideo) {
    return <div>No video data available.</div>;
  }

  return (
    <div className="video-detail-page">
      <VideoHero video={selectedVideo} />
      <div className="VideoSelectAndNextDisplay">
        <div className="select-video-display">
        <VideoHeroAbout video={selectedVideo} />
        <VideoHeroAddComment commentsCount={selectedVideo.comments.length} />
        <VideoHeroComments comments={selectedVideo.comments} />
        </div>
        <div className="next-video-display">
        <VideosNextList videos={filteredVideos} currentVideoId={selectedVideo.id} />
        </div>
      </div>
    </div>
  );
}

export default VideoDetailPage;
