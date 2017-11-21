import $ from 'jquery';
import updateVideoList from '../redux/actions';
import YOUTUBE_API_KEY from '../config/youtube';

const searchYouTube = (options) => {
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
      console.log('AJAX request successful');
      console.log(data.items);
      updateVideoList(data.items);
    },
    error: () => {
      console.error('AJAX request failed');
    },
  });
};

export default searchYouTube;
