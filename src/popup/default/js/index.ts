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

import '../scss/styles.scss';
import { drawActionsButtons, drawError } from './view';
import {
  messageSystem as getActiveTabDetailsMessageSystem,
  createRequest as getActiveTabDetailsCreateRequest,
} from '../../../messaging/message_systems/get_active_tab_details/message_system';
import { getActions } from './get_actions';

(async () => {
  console.log('loading');
  const getActiveTabDetailsResponse =
    await getActiveTabDetailsMessageSystem.sendInTab(
      getActiveTabDetailsCreateRequest({})
    );

  console.log(getActiveTabDetailsResponse);

  if (getActiveTabDetailsResponse) {
    const activeTabDetails = getActiveTabDetailsResponse.data.tabDetails;
    if (activeTabDetails) {
      const actions = getActions(activeTabDetails);
      drawActionsButtons(actions);
    } else {
      drawError('no active tab details data');
    }
  } else {
    drawError('no active tab details response');
  }
})();
