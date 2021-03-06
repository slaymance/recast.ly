import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ video }) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        title="Video Player"
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        allowFullScreen
      />
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>
);

VideoPlayer.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string,
    }),
    snippet: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};

export default VideoPlayer;
