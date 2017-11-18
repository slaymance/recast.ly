import React from 'react';
import PropTypes from 'prop-types';
import VideoListEntry from './VideoListEntry';

const VideoList = props => (
  <div className="video-list">
    { props.videos.map(video =>
      <VideoListEntry video={video} key={video.id.videoId} />)}
  </div>
);

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideoList;
