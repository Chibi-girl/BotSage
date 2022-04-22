// ask for user permission when extension is first installed
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason.search(/install/g) === -1) {
    return;
  }

  chrome.tabs.create({
    url: chrome.extension.getURL('../html/permission.html'),
    active: true,
  });
});
