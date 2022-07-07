/**
 * @file
 * @author Albert Patterson <albert.patterson.code@gmail.com>
 * @see [Linkedin]{@link https://www.linkedin.com/in/apattersoncmu/}
 * @see [Github]{@link https://github.com/albertpatterson}
 * @see [npm]{@link https://www.npmjs.com/~apatterson189}
 * @see [Youtube]{@link https://www.youtube.com/channel/UCrECEffgWKBMCvn5tar9bYw}
 * @see [Medium]{@link https://medium.com/@albert.patterson.code}
 *
 * Free software under the GPLv3 licence. Permissions of this strong copyleft
 * license are conditioned on making available complete source code of
 * licensed works and modifications, which include larger works using a
 * licensed work, under the same license. Copyright and license notices must
 * be preserved. Contributors provide an express grant of patent rights.
 */

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
