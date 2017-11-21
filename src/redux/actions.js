export const updateVideoList = videos => ({
  type: 'UPDATE_VIDEO_LIST',
  videos,
});

export const renderVideoPlayer = video => ({
  type: 'RENDER_VIDEO_PLAYER',
  video,
});
