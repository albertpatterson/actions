import { Context } from '../context';

export function getVideos() {
  return Array.from(document.querySelectorAll('video'));
}

export function setSpeeds(
  context: Context,
  speed: number,
  videos?: HTMLVideoElement[]
) {
  context.clearVidSpeedInterval();
  const setSpeedsIn = () => {
    videos = videos || getVideos();
    videos.forEach((v) => (v.playbackRate = speed));
  };
  setSpeedsIn();
  context.setVidSpeedInterval(setSpeedsIn, 1e3);
}

export function skip(
  context: Context,
  amount: number,
  videos?: HTMLVideoElement[],
  interval = 1000
) {
  context.clearVidSkipInterval();
  const skipIn = () => {
    videos = videos || getVideos();
    incrementTime(context, amount, videos);
  };
  skipIn();
  context.setVidSkipInterval(skipIn, interval);
}

export function incrementTime(
  context: Context,
  amount: number,
  videos?: HTMLVideoElement[]
) {
  videos = videos || getVideos();
  videos.forEach((video) => (video.currentTime += amount));
}

export function decrementTime(
  context: Context,
  amount: number,
  videos?: HTMLVideoElement[],
  resetSpeedAndSkip = false
) {
  const vidsProvided = Boolean(videos);
  videos = videos || getVideos();
  videos.forEach((video) => (video.currentTime -= amount));
  if (resetSpeedAndSkip) {
    const setSpeedVids = vidsProvided ? videos : undefined;
    setSpeeds(context, 1, videos);
    context.clearVidSkipInterval();
  }
}
