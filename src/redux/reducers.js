import { createStore } from 'redux';
import exampleVideoData from '../data/exampleVideoData';

const recastApp = (state = exampleVideoData, action) => {
  switch (action.type) {
    case 'CREATE_VIDEO_LIST':
      return exampleVideoData;
    default:
      return state;
  }
};

const store = createStore(recastApp);

export default store;
