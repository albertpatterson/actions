import { handleRequestInTab } from '../../messaging/framework/message';
import { logResponse } from '../../messaging/util';
import { createRequest as createSimpleRequest } from '../../messaging/message_systems/youtube_action/message_system';
import { messageSystem } from '../../messaging/message_systems/youtube_action/message_system';

/**
 * handle requests sent via the message system
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  return handleRequestInTab(request, sender, sendResponse);
});
