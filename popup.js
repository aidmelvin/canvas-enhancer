// When the button is clicked, inject setPageBackgroundColor into current page
let bg_lightBlue = document.getElementById('bg-lightBlue');
let bg_black = document.getElementById('bg-black');
let bg_grey = document.getElementById('bg-grey');
let bg_white = document.getElementById('bg-white');

document.body.addEventListener('load', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setSavedColor,
    });
})

// function setSavedColor() {
//     console.log('retreiving from memory')
//     chrome.storage.sync.get(['mainPageColor'], function(result) {
//         document.body.style.backgroundColor = result;
//     });
// }
// setSavedColor();

bg_lightBlue.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeToLightBlue,
  });
});

function changeToLightBlue() {
    chrome.storage.sync.set({mainPageColor: "lightBlue"}, () => {
    });
    document.body.style.backgroundColor = "lightBlue";
}

bg_black.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: changeToBlack,
    });
  });
  
  function changeToBlack() {
    chrome.storage.sync.set({mainPageColor: "black"}, () => {
    });
      document.body.style.backgroundColor = "black";
  }

bg_grey.addEventListener("click", async () => {
let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeToGrey,
});
});

function changeToGrey() {
    chrome.storage.sync.set({mainPageColor: "grey"}, () => {
    });
    document.body.style.backgroundColor = "grey";
}

bg_white.addEventListener("click", async () => {
let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeToWhite,
});
});

function changeToWhite() {
    chrome.storage.sync.set({mainPageColor: "white"}, () => {
    });
    document.body.style.backgroundColor = "white";
}