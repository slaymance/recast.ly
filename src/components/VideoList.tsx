import React from 'react';
import PropTypes from 'prop-types';
import VideoListEntry from './VideoListEntry';

const VideoList = ({ videos, onVideoClick }) => (
  <div className="video-list">
    { videos.map(video => (
      <VideoListEntry
        video={video}
        onClick={() => onVideoClick(video)}
        key={video.id.videoId}
      />
    ))}
  </div>
);

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onVideoClick: PropTypes.func.isRequired,
};

export default VideoList;
