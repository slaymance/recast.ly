import { combineReducers } from 'redux';
import exampleVideoData from '../data/exampleVideoData';

const video = exampleVideoData[0];

const videoList = (state = exampleVideoData, action) => {
  switch (action.type) {
    case 'UPDATE_VIDEO_LIST':
      return action.videos;
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
  videoList,
  videoPlayer,
});
