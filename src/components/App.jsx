import React from 'react';
import Search from './Search';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import store from '../redux/reducers';

const App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={store.getState()[0]} />
      </div>
      <div className="col-md-5">
        <VideoList videos={store.getState()} />
      </div>
    </div>
  </div>
);

export default App;
