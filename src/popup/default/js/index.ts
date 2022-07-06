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
import { drawActionsButtons, showMessage, showToast } from './view';
import {
  messageSystem as getActiveTabDetailsMessageSystem,
  createRequest as createGetActiveTabDetailsRequest,
} from '../../../messaging/message_systems/get_active_tab_details/message_system';
import {
  messageSystem as doActionMessageSystem,
  createRequest as createdoActionRequest,
} from '../../../messaging/message_systems/do_action/message_system';
import { getActions as getLabeledActions } from './get_actions/get_actions';
import { actions } from '../../../actions/base';
import { TabDetails } from '../../../messaging/message_systems/get_active_tab_details/types';

(async () => {
  console.log('loading');
  const getActiveTabDetailsResponse =
    await getActiveTabDetailsMessageSystem.sendInTab(
      createGetActiveTabDetailsRequest({})
    );

  console.log(getActiveTabDetailsResponse);

  if (getActiveTabDetailsResponse) {
    const activeTabDetails = getActiveTabDetailsResponse.data.tabDetails;
    if (activeTabDetails) {
      const doAction = createActionDoer(activeTabDetails);

      const labeledActions = getLabeledActions(activeTabDetails);
      drawActionsButtons(labeledActions, doAction);
    } else {
      showMessage('no active tab details data', true);
    }
  } else {
    showMessage('no active tab details response', true);
  }
})();

function createActionDoer(tabDetails: TabDetails) {
  return async (actionName: string) => {
    const request = createdoActionRequest({
      tabDetails,
      actionName,
    });
    const result = await doActionMessageSystem.sendInTab(request);

    if (result) {
      if (result.data.result) {
        const msg = actions[actionName].handleResult(result.data.result);
        if (msg) {
          showToast(msg);
        }
      } else {
        const error =
          result.data.error ||
          `no data in response returned for action ${actionName}`;
        showToast(error, true);
      }
    } else {
      const error = `no response returned for action ${actionName}`;
      showToast(error, true);
    }
  };
}
