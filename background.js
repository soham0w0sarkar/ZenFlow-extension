chrome.tabs.onCreated.addListener(function (tab) {
  if (tab.status == "loading" && tab.pendingUrl == "chrome://newtab/") {
    chrome.tabs.update(tab.id, {
      url: chrome.runtime.getURL("build/index.html"),
    });
  }
});
