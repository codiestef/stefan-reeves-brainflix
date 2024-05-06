import React from 'react';
import "../styles/componentstyles/VideoHeroAbout.scss";
import viewsIcon from "../assets/Icons/views.svg";
import likesIcon from "../assets/Icons/likes.svg";

function VideoHeroAbout({ video }) {
    const VideoDate = new Date(video.timestamp);
    const formattedVideoDate = `${VideoDate.getMonth() + 1}/${VideoDate.getDate()}/${VideoDate.getFullYear()}`;

    return (
        <div className="video-hero-about">
            <div key={video.id}>
                <h1 className="video-hero-about__title">{video.title}</h1>
                <div className="video-hero-about__details">
                    <div className="video-hero-about__static">
                        <subheader className="video-hero-about__channel">By {video.channel}</subheader>
                        <p className="video-hero-about__timestamp">{formattedVideoDate}</p>
                    </div>
                    <div className="video-hero-about__dynamic">
                        <p className="video-hero-about__views"><img src={viewsIcon} alt="Views Icon" /> {video.views}</p>
                        <p className="video-hero-about__likes"><img src={likesIcon} alt="Likes Icon" /> {video.likes}</p>
                    </div>
                </div>
                <p className="video-hero-about__description">{video.description}</p>
            </div>
        </div>
    );
}

export default VideoHeroAbout;