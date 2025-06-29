const sidebarHTML = fetch(chrome.runtime.getURL("./sidebar/index.html")).then(
  (response) => response.text()
);

console.log("Sidebar HTML fetched:", sidebarHTML);
