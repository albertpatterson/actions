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

import { messageSystem as simpleMessageSystem } from './message_system';
import { ResponseResult, Request } from '../../framework/types';
import {
  YoutubeActionRequestData,
  YoutubeActionRequestResponseData,
} from './types';

export async function handleAsyncInServiceWorker(
  request: Request<YoutubeActionRequestData>,
  sender: chrome.runtime.MessageSender
): Promise<ResponseResult<YoutubeActionRequestResponseData>> {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const activeTab = tabs[0];

  if (activeTab.id !== undefined) {
    const response = await simpleMessageSystem.sendInServiceWorker(
      activeTab.id,
      request
    );

    return response ? response : { succeeded: false, data: {} };
  }

  return { succeeded: false, data: {} };
}
