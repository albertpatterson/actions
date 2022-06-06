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

import { handleRequestInServiceWorker } from '../messaging/framework/message';

/**
 * handle requests sent via the message system
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  return handleRequestInServiceWorker(request, sender, sendResponse);
});

const domainPopupMap = new Map<string, string>([
  ['youtube.com', 'popup/youtube/index.html'],
]);

function testAllDomains(url: string, domain: string) {
  const httpWwwDomain = 'http://www.' + domain;
  const httpsWwwwDomain = 'https://www.' + domain;
  const httpDomain = 'http://' + domain;
  const httpsDomain = 'https://' + domain;
  return (
    url.startsWith(httpWwwDomain) ||
    url.startsWith(httpsWwwwDomain) ||
    url.startsWith(httpDomain) ||
    url.startsWith(httpsDomain)
  );
}

function getPopup(url?: string) {
  if (url) {
    for (const [domain, popup] of Array.from(domainPopupMap.entries())) {
      if (testAllDomains(url, domain)) {
        return popup;
      }
    }
  }
  return null;
}

async function updatePopupForFocusedTab() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const activeTab = tabs[0];
  if (activeTab) {
    const popup = getPopup(activeTab.url);
    if (popup) {
      await chrome.action.enable();
      await chrome.action.setIcon({
        path: { '16': '/icon/icon16.png' },
        tabId: activeTab.id,
      });
      await chrome.action.setPopup({ popup, tabId: activeTab.id });
    } else {
      await chrome.action.disable();
      await chrome.action.setIcon({
        path: { '16': '/icon/disabled_icon16.png' },
      });
      await chrome.action.setPopup({ popup: '', tabId: activeTab.id });
    }
  }
}

/**
 * Top level extension logic
 */
(async () => {
  console.log('Extension loaded');
  chrome.tabs.onActivated.addListener(updatePopupForFocusedTab);

  chrome.tabs.onUpdated.addListener(updatePopupForFocusedTab);

  chrome.windows.onFocusChanged.addListener(updatePopupForFocusedTab);

  await updatePopupForFocusedTab();
})();
