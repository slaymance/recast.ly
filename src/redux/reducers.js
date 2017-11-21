import { combineReducers } from 'redux';
import exampleVideoData from '../data/exampleVideoData';

const videoList = (state = exampleVideoData, action) => {
  switch (action.type) {
    case 'UPDATE_VIDEO_LIST':
      return action.videos;
    default:
      return state;
  }
};

export default combineReducers({
  videoList,
});
