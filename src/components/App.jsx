<<<<<<< HEAD
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {video: props.videos[0], videos: this.props.videos};
  }

  callback(videoSelected) {
    this.setState({video: videoSelected});
  }

  searchCallback(newVideos) {
    this.setState({videos: newVideos});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchCallback={this.searchCallback.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} callback={this.callback.bind(this)}/>
          </div>
        </div>
=======
import React from 'react';

const App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em> view goes here</h5></div>
>>>>>>> 998583ed8bf7034458763ec703ea9f2eae00ecf2
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
