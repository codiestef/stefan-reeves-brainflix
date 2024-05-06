import React from 'react';
import "../styles/componentstyles/VideosNextList.scss";

function VideosNextList({ videos, currentVideoId, onVideoSelect }) {
    return (
        <div className="next-videos">
            <h2 className="next-videos__header">Next Videos</h2>
            {videos.filter(video => video.id !== currentVideoId).map((video) => (
                <div key={video.id} className="next-video" onClick={() => onVideoSelect(video.id)}>
                    <img src={video.image} alt={video.title} className="next-video__thumbnail"/>
                    <div className="next-video__details">
                        <subheader className="next-video__title">{video.title}</subheader>
                        <p className="next-video__channel">{video.channel}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VideosNextList;