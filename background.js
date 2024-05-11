chrome.tabs.onCreated.addListener(function (tab) {
  if (tab.status == "loading" && tab.pendingUrl == "chrome://newtab/") {
    chrome.tabs.update(tab.id, {
      url: "https://zen-flow-frontend.vercel.app",
    });
  }
});
