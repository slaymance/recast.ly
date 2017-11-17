import React from 'react';

const VideoPlayer = () => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        title="Video Player"
        className="embed-responsive-item"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        allowFullScreen
      />
    </div>
    <div className="video-player-details">
      <h3>Video Title</h3>
      <div>Video Description</div>
    </div>
  </div>
);

export default VideoPlayer;
