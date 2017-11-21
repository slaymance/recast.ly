import React from 'react';
import Search from './Search';
import VideoPlayerRenderer from './VideoPlayerRenderer';
import VisibleVideoList from './VisibleVideoList';

const App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayerRenderer />
      </div>
      <div className="col-md-5">
        <VisibleVideoList />
      </div>
    </div>
  </div>
);

export default App;
