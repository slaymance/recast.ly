import React from 'react';
import PropTypes from 'prop-types';

const VideoListEntry = ({ video, onClick }) => (
  <div
    className="video-list-entry media"
    onClick={onClick}
  >
    <div className="media-left media-middle">
      <img
        className="media-object"
        src={video.snippet.thumbnails.default.url}
        alt=""
      />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">
        {video.snippet.title}
      </div>
      <div className="video-list-entry-detail">
        {video.snippet.description}
      </div>
    </div>
  </div>
);

VideoListEntry.propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      thumbnails: PropTypes.shape({
        default: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VideoListEntry;
