class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.handleSubmit = _.throttle(this.handleSubmit, 500);
  }

  handleSubmit () {
    let options = {query: this.state.input, max: 5};
    searchYouTube(options, this.props.searchCallback);
  }

  handleLiveSearch(event) {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" onChange={event => {
          this.handleLiveSearch(event);
          this.handleSubmit();
        }} type="text" />
        <button className="btn hidden-sm-down" onClick={this.handleSubmit.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

/*





*/
