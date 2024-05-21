// import React from 'react';
// import uploadVideo from '../../assets/Images/Upload-video-preview.jpg'
// import './UploadPage.scss';

// function UploadPage() {
//   return (
//     <div className="upload">
//       <h2>Upload Video</h2>
//         <div className="upload-page">
//           <div className="upload-page__image">
//             <label className="upload-form__label">
//               VIDEO THUMBNAIL
//             <img src={uploadVideo} className="upload-video__thumbnail"/>
//             </label>
//           </div>
//           <div className="upload-page__form">
//             <form className="upload-form">
            
//               <label className="upload-form__label">
//                 TITLE YOUR VIDEO
//               </label>
//               <textarea
//                   className="upload-form__textarea"
//                   type="text"
//                   placeholder="Add a title to your video"
//               />
//               <label className="upload-form__label">
//                 ADD A VIDEO DESCRIPTION
//               </label>
//               <textarea
//                   className="upload-form__textarea"
//                   type="text"
//                   placeholder="Add a description to your video"
//               />
              
//               <button
//                 className="upload-form__button"
//                 type="submit">
//                 PUBLISH
//               </button>
//               </form>
//           </div>
//         </div>
//     </div>
//   );
// }

// export default UploadPage;

import React from 'react';
import axios from 'axios';
import uploadVideo from '../../assets/Images/Upload-video-preview.jpg';
import './UploadPage.scss';

function UploadPage() {
  const handleUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const description = formData.get('description');

    try {
      await axios.post(`https://localhost:5050/videos`, {
        title,
        description
         // Update accordingly
      });
      // Optionally redirect to home or another page on success
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div className="upload">
      <h2>Upload Video</h2>
      <div className="upload-page">
        <div className="upload-page__image">
          <label className="upload-form__label">
            VIDEO THUMBNAIL
            <img src={uploadVideo} alt="Upload Thumbnail" className="upload-video__thumbnail"/>
          </label>
        </div>
        <form className="upload-form" onSubmit={handleUpload}>
          <label className="upload-form__label">TITLE YOUR VIDEO</label>
          <input
              className="upload-form__input"
              type="text"
              name="title"
              placeholder="Add a title to your video"
          />
          <label className="upload-form__label">ADD A VIDEO DESCRIPTION</label>
          <input
              className="upload-form__textarea"
              type="text"
              name="description"
              placeholder="Add a description to your video"
          />
          
          <button className="upload-form__button" type="submit">
            PUBLISH
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
