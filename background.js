
let mainPageColor = "white";
let sideBarColor = "red";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ mainPageColor });
    console.log(`Default background color set to ${mainPageColor}`);
})

// chrome.runtime.load.addListener(() => {
//     console.log('page relaoded')
// })
