export const fetchVideos = () => ({
  type: 'FETCH_VIDEOS',
});

export const fetchVideosSuccess = videos => ({
  type: 'FETCH_VIDEOS_SUCCESS',
  videos,
});

export const fetchVideosFailure = error => ({
  type: 'FETCH_VIDEOS_FAILURE',
  error,
});

export const renderVideoPlayer = video => ({
  type: 'RENDER_VIDEO_PLAYER',
  video,
});
