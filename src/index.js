let videos;

// searchYouTube({query: 'angular js', max: 5}, (data) => {
//   console.log('callbacked')
//   videos = data;
// });

// console.log(videos);

var initializeApp = function () {
  let promise = new Promise((resolve, reject) => {
    searchYouTube({query: 'mocha js', max: 5}, (data) => {
      resolve(data);
    });
  });

  promise.then((successData) => {
    ReactDOM.render(<App videos={successData}/>, document.getElementById('app'));
  }).catch((reason) => {
    console.error('Couldn\'t get data');
  });
};
initializeApp();