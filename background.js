chrome.tabs.onCreated.addListener(function (tab) {
  console.log(tab);
  if (tab.status == "loading" && tab.pendingUrl == "chrome://newtab/") {
    console.log("New tab created");
    chrome.tabs.update(tab.id, {
      url: "https://zen-flow-frontend.vercel.app",
    });
  }
  console.log("Tab created");
});
