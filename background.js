// get tab id from url search bar of current tab 
// this function work when user click its work to bookmark it select a piece of url after ? from tab to and 
// send new msg to content.js file 

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);
        console.log(urlParameters);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: urlParameters.get("v"),
        });
    }
});