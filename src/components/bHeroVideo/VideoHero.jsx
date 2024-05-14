import React from 'react';
import "../bHeroVideo/VideoHero.scss";

function VideoHero({ video }) {
    return (
        <div className="hero">
            <video controls src={video.video} poster={video.image} className="hero__video">
            </video>
        </div>
    );
}

export default VideoHero;