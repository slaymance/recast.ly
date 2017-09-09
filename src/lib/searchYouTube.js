var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search'
  });
};

window.searchYouTube = searchYouTube;
