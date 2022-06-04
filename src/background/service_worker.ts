import { handleRequestInServiceWorker } from '../messaging/framework/message';

/**
 * handle requests sent via the message system
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('received message in service worker', request);

  return handleRequestInServiceWorker(request, sender, sendResponse);
});

const domainPopupMap = new Map<string, string>([
  ['youtube.com', 'popup/youtube/index.html'],
  ['github.com', 'popup/github/index.html'],
]);

const emptyPopup = 'popup/empty/index.html';

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
  return emptyPopup;
}

/**
 * Top level extension logic
 */
(async () => {
  console.log('Extension loaded');
  chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    chrome.action.setPopup({ popup: getPopup(tab.url) });
  });
})();
