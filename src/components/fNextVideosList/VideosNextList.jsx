import React from 'react';
import { Link } from 'react-router-dom';
import "../fNextVideosList/VideosNextList.scss";

function VideosNextList({ videos, currentVideoId }) {
    return (
        <div className="next-videos">
            <h2 className="next-videos__header">Next Videos</h2>
            {videos.filter(video => video.id !== currentVideoId).map((video) => (
                <Link to={`/videos/${video.id}`} key={video.id} className="next-video">
                    <img src={video.image} alt={video.title} className="next-video__thumbnail"/>
                    <div className="next-video__details">
                        <h3 className="next-video__title">{video.title}</h3>
                        <p className="next-video__channel">{video.channel}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default VideosNextList;