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

/**
 * Update this function to contain the logic run in the service worker when this request type is recieved.
 */

import { messageSystem as getActiveTabDetailsMessageSystem } from './message_system';
import { ResponseResult, Request } from '../../framework/types';
import { createRequest as createGetActivbeTabDetailsRequest } from './message_system';
import { logResponse } from '../../util';
import {
  GetActiveTabDetailsRequestData,
  GetActiveTabDetailsRequestResponseData,
} from './types';

export async function handleAsyncInServiceWorker(
  request: Request<GetActiveTabDetailsRequestData>,
  sender: chrome.runtime.MessageSender
): Promise<ResponseResult<GetActiveTabDetailsRequestResponseData>> {
  console.log(
    `Handling SetActiveTabDetails with message "${request.data}" in service worker`
  );

  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const activeTab = tabs[0];

  if (!activeTab?.id) {
    return {
      succeeded: false,
      data: {
        error: 'active tab not found',
      },
    };
  }

  const response = await getActiveTabDetailsMessageSystem.sendInServiceWorker(
    activeTab.id,
    createGetActivbeTabDetailsRequest({})
  );

  logResponse(response);

  if (!response) {
    return {
      succeeded: false,
      data: {
        error: 'no response received',
      },
    };
  }

  return response;
}
