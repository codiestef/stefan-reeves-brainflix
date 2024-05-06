import React from 'react';
import "../styles/componentstyles/VideoHero.scss";
import playIcon from "../assets/Icons/play.svg";
import volumeIcon from "../assets/Icons/volume_off.svg";
import fullscreenIcon from "../assets/Icons/fullscreen.svg";

function VideoHero({ video }) {
    return (
        <div className="hero">
            <video className="hero__video" controls poster={video.image}>
                <source src={video.video} type="video/mp4"/>
            </video>
        </div>
    );
}

export default VideoHero;