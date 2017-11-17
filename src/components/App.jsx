import React from 'react';
import Search from './Search';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

const App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer />
      </div>
      <div className="col-md-5">
        <VideoList />
      </div>
    </div>
  </div>
);

export default App;
