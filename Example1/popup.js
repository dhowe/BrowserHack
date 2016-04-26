
// called when our popup is loaded
document.addEventListener('DOMContentLoaded', function () {

  // select our button elements
  var button = document.getElementById('button1');

  // add a listener for button clicks
  button.addEventListener('click', function () {

    // now get the active chrome tab
    chrome.tabs.getSelected(null, function (tab) {

      // if not, create a new iframe for our content
      iframe = document.createElement('iframe');
      iframe.setAttribute('width', '800px');
      iframe.setAttribute('height', '600px');
      iframe.setAttribute('frameborder', '0');

      // set its URL to be the page we want
      iframe.setAttribute('src', 'http://www.greatfirewallofchina.org');

      // and add it to the document
      document.body.appendChild(iframe);
    });

  }, false);

}, false);
