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

import { getVideos, setSpeeds as setSpeedsUtil } from '../../util/utils';
import { Context } from '../../context';
import { TabDetails } from '../../../../messaging/message_systems/get_active_tab_details/types';
import { createAction } from '../../../shared';

export function setSpeeds(context: Context, speed: number) {
  const videos = getVideos();
  setSpeedsUtil(context, speed, videos);
}

export function getActions(context: Context) {
  return {
    setSpeed1: createAction({
      label: '1',
      tooltip: 'Set speed to 1',
      tabFcn: () => {
        setSpeeds(context, 1);
      },
      filter: (tabDetails: TabDetails) => tabDetails.hasVideo,
    }),
    setSpeed3: createAction({
      label: '3',
      tooltip: 'Set speed to 3',
      tabFcn: () => {
        setSpeeds(context, 3);
      },
      filter: (tabDetails: TabDetails) => tabDetails.hasVideo,
    }),
    setSpeed4: createAction({
      label: '4',
      tooltip: 'Set speed to 4',
      tabFcn: () => {
        setSpeeds(context, 4);
      },
      filter: (tabDetails: TabDetails) => tabDetails.hasVideo,
    }),
  };
}
