import React from 'react';
import uploadVideo from '../../assets/Images/Upload-video-preview.jpg'
import './UploadPage.scss';

function UploadPage() {
  return (
    <div className="upload">
      <h2>Upload Video</h2>
        <div className="upload-page">
          <div className="upload-page__image">
            <label className="upload-form__label">
              VIDEO THUMBNAIL
            <img src={uploadVideo} className="upload-video__thumbnail"/>
            </label>
          </div>
          <div className="upload-page__form">
            <form className="upload-form">
            
              <label className="upload-form__label">
                TITLE YOUR VIDEO
              </label>
              <textarea
                  className="upload-form__textarea"
                  type="text"
                  placeholder="Add a title to your video"
              />
              <label className="upload-form__label">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                  className="upload-form__textarea"
                  type="text"
                  placeholder="Add a description to your video"
              />
              
              <button
                className="upload-form__button"
                type="submit">
                PUBLISH
              </button>
              </form>
          </div>
        </div>
    </div>
  );
}

export default UploadPage;