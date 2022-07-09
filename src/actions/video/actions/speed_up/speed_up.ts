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

import { getVideos, setSpeeds } from '../../util/utils';
import { Context } from '../../context';
import { Action } from '../../../types';
import { TabDetails } from '../../../../messaging/message_systems/get_active_tab_details/types';
import { createAction } from '../../../shared';

export function speedUp(context: Context) {
  const videos = getVideos();
  const speed = videos[0].playbackRate + 0.5;
  setSpeeds(context, speed, videos);
}

export function getAction(context: Context): Action {
  return createAction({
    label: '⏫',
    tooltip: 'Increase speed by 0.5',
    tabFcn: async () => {
      speedUp(context);
    },
    filter: (tabDetails: TabDetails) => tabDetails.hasVideo,
  });
}
