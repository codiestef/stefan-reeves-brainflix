import React from 'react';
import "../eHeroComments/VideoHeroComments.scss";

function VideoHeroComments({ comments }) {
    return (
        <div className="comments">

            {comments.map((comment) => {
                const date = new Date(comment.timestamp);
                const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

                return (
                    <div key={comment.id} className="comments__comment">
                        <div className="comments__header">
                            <h3 className="comments__name">{comment.name}</h3>
                            <p className="comments__timestamp">{formattedDate}</p>
                        </div>
                        <p className="comments__content">{comment.comment}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default VideoHeroComments;