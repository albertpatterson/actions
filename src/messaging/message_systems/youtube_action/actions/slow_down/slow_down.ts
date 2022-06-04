import { getVideos, setSpeeds } from '../../video/utils';
import { context } from '../../context';

export function slowDown() {
  const videos = getVideos();
  const speed = videos[0].playbackRate - 0.5;
  setSpeeds(context, speed, videos);
}
