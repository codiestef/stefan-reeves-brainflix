import React from 'react';
import "../styles/componentstyles/VideoHeroAbout.scss";

function VideoHeroAbout({ video }) {
    return (
        <div className="video-hero-about">
            <h1 className="video-hero-about__title">{video.title}</h1>
            <h2 className="video-hero-about__channel">{video.channel}</h2>
            <p className="video-hero-about__description">{video.description}</p>
        </div>
    );
}

export default VideoHeroAbout;