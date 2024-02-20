chrome.tabs.onCreated.addListener(function (tab) {
  chrome.tabs.update(tab.id, { url: "https://zen-flow.vercel.app" });
});
