import { connect } from 'react-redux';
import VideoList from './VideoList';
import { renderVideoPlayer } from '../redux/actions';

const mapStateToProps = state => ({
  videos: state.videoList,
});

const mapDispatchToProps = dispatch => ({
  onVideoClick: (video) => {
    dispatch(renderVideoPlayer(video));
  },
});

const VisibleVideoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoList);

export default VisibleVideoList;
