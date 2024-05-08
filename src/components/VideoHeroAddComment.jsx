import React from 'react';
import '../styles/componentstyles/VideoHeroAddComment.scss';
import commentIcon from '../assets/Icons/add_comment.svg';

function VideoHeroAddComment({ commentsCount }) {
  return (
    <div className="add-comment">
      <subheader>{commentsCount} Comments</subheader>
      <form className="add-comment__form">
        <label class="add-comment__label">
                JOIN THE CONVERSATION
        </label>
        <div>
            <input type="text" placeholder="Add a new comment" className="add-comment__input" />
        </div>
        <div>
            <button type="submit" className="add-comment__button">
            <img src={commentIcon} alt="Upload" className="add-comment__icon" />
            COMMENT
            </button>
        </div>
      </form>
    </div>
  );
}

export default VideoHeroAddComment;