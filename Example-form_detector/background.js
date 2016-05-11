// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

  // console.log('URL: ' + tab.url);
  var script = 'var inputs = document.getElementsByTagName("input"); for (var i = 0; i<inputs.length; i++) inputs[i].style.border = "2px solid red";'
  chrome.tabs.executeScript({
    code: script
  });

  /*
  var path = chrome.runtime.getURL("css/form.css");
  console.log("path: ", path);
  chrome.tabs.insertCSS({
    code: path
  });
  */
});
