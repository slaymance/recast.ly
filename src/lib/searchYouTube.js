import $ from 'jquery';
import {
  fetchVideos,
  fetchVideosSuccess,
  fetchVideosFailure,
} from '../redux/actions';
import YOUTUBE_API_KEY from '../config/youtube';

const searchYouTube = (options, dispatch) => {
  dispatch(fetchVideos());
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      maxResults: options.max,
      part: 'snippet',
      q: options.query,
      type: 'video',
      key: YOUTUBE_API_KEY,
    },
    contentType: 'application/json',
    dataType: 'json',
    success: (data) => {
      dispatch(fetchVideosSuccess(data.items));
    },
    error: (error) => {
      console.error('AJAX request failed', error);
      dispatch(fetchVideosFailure(error));
    },
  });
};

export default searchYouTube;
