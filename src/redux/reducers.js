import { createStore } from 'redux';
import exampleVideoData from '../data/exampleVideoData';

const recastApp = (state = exampleVideoData, action) => {
  switch (action.type) {
    case 'UPDATE_VIDEO_LIST':
      return action.videos;
    default:
      return state;
  }
};

const store = createStore(recastApp);

export default store;
