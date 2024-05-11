import React from 'react';
import '../styles/componentstyles/VideoHeroAddComment.scss';
import commentIcon from '../assets/Icons/add_comment.svg';

function VideoHeroAddComment({ commentsCount }) {
  return (
    <div className="add-comment">
        <h3 class="subheader">{commentsCount} Comments</h3>

    <div>
    <form className="comment-form">
        <div className="comment-form__labelAndText">
        <label class="comment-form__label">
            JOIN THE CONVERSATION
        </label>
        <textarea
            class="comment-form__textarea"
            type="text"
            placeholder="Add a new comment"
        />
        </div>

            <button
                className="comment-form__button"
                type="submit">
                {/* <img src={commentIcon} alt="Upload" className="add-icon" /> */}
                COMMENT
            </button>

        </form>
    </div>
    </div>
  );
}

export default VideoHeroAddComment;