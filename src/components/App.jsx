import React from 'react';
import Search from './Search';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import store from '../redux/reducers';

const videos = store.getState();

const App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={videos[0]} />
      </div>
      <div className="col-md-5">
        <VideoList videos={videos} />
      </div>
    </div>
  </div>
);

export default App;
