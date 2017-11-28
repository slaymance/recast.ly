import { connect } from 'react-redux';
import VideoPlayer from './VideoPlayer';

const mapStateToProps = state => ({
  video: state.videoPlayer,
});

const VideoPlayerRenderer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerRenderer;
