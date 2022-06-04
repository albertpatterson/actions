import { getVideos, setSpeeds as setSpeedsUtil } from '../../video/utils';
import { Context } from '../../context';

export function setSpeeds(context: Context, speed: number) {
  const videos = getVideos();
  setSpeedsUtil(context, speed, videos);
}
