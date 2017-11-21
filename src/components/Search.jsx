import React from 'react';
import searchYouTube from '../lib/searchYouTube';

const Search = () => {
  let input;
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        ref={(node) => {
          input = node;
        }}
      />
      <button
        className="btn hidden-sm-down"
        onClick={() => {
          searchYouTube({
            query: input.value,
            max: 5
          })
          input.value = '';
        }}
      >
        <span className="glyphicon glyphicon-search" />
      </button>
    </div>
  );
};

export default Search;
