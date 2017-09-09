var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {maxResults: options.max, part: 'snippet', q: options.query, type: 'video', key: window.YOUTUBE_API_KEY},
    contentType: 'application/json',
    dataType: 'json',
    success: function(data) {
      console.log('AJAX request successful');
      callback(data.items);
    },
    error: function() {
      console.error('AJAX request failed');
    }
  });
};

window.searchYouTube = searchYouTube;
