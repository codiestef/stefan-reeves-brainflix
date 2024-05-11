import React from 'react';
import "../bHeroVideo/VideoHero.scss";
import playIcon from "../../assets/Icons/play.svg";
import volumeIcon from "../../assets/Icons/volume_off.svg";
import fullscreenIcon from "../../assets/Icons/fullscreen.svg";

function VideoHero({ video }) {
    return (
        <div className="hero">
            <video className="hero__video" controls poster={video.image}>
                <source src={`${video.video}?api_key=123`} type="video/mp4"/>
            </video>
        </div>
    );
}

export default VideoHero;