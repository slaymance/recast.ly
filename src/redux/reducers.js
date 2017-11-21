import { combineReducers } from 'redux';
import exampleVideoData from '../data/exampleVideoData';

const video = exampleVideoData[0];

const fetchingVideos = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS':
      return true;
    default:
      return state;
  }
};

const videoList = (state = exampleVideoData, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS_SUCCESS':
      return action.videos;
    default:
      return state;
  }
};

const fetchError = (state = '', action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS_FAILURE':
      return action.error;
    default:
      return state;
  }
};

const videoPlayer = (state = video, action) => {
  switch (action.type) {
    case 'RENDER_VIDEO_PLAYER':
      return action.video;
    default:
      return state;
  }
};

export default combineReducers({
  fetchingVideos,
  videoList,
  fetchError,
  videoPlayer,
});
