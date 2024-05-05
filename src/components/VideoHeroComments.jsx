import React from 'react';
import "../styles/componentstyles/VideoHeroComments.scss";

function VideoHeroComments({ comments }) {
    return (
        <div className="comments">
            {comments.map((comment) => (
                <div key={comment.id} className="comments__comment">
                    <h3 className="comments__name">{comment.name}</h3>
                    <p className="comments__content">{comment.comment}</p>
                </div>
            ))}
        </div>
    );
}

export default VideoHeroComments;