import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchYouTube from '../lib/searchYouTube';

const Search = ({ dispatch }) => {
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
            max: 5,
          }, dispatch);
          input.value = '';
        }}
      >
        <span className="glyphicon glyphicon-search" />
      </button>
    </div>
  );
};

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Search);
