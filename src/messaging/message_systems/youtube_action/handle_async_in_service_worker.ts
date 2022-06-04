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
