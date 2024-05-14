import React from 'react';
import '../dHeroAddComment/VideoHeroAddComment.scss';

function VideoHeroAddComment({ commentsCount }) {

  return (
    <div className="add-comment">
        <h3 className="subheader">{commentsCount} Comments</h3>

        <form className="comment-form">
            <div className="comment-form__labelAndText">
                <label className="comment-form__label">
                    JOIN THE CONVERSATION
                </label>
                <textarea
                    className="comment-form__textarea"
                    type="text"
                    placeholder="Add a new comment"
                />
            </div>
            <button
                className="comment-form__button"
                type="submit">
                COMMENT
            </button>
        </form>
    </div>
  );
}

export default VideoHeroAddComment;