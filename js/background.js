chrome.tabs.sendMessage(tab.id,{action: "addButton"} );
chrome.action.onClicked.addListener((tab)=>{
    chrome.tabs.create({url: chrome.runtime.getURL("settings.html")})
});
