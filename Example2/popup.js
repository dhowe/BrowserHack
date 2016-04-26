// called when our popup is loaded
document.addEventListener('DOMContentLoaded', function () {

  var url = 'http://www.greatfirewallofchina.org';

  // select our page elements
  var button = document.getElementById('gfw_button'),
    iframe = document.getElementById('gfw_iframe');

  // add a listener for button clicks
  button.addEventListener('click', function () {

    // once its clicked, we can hide it
    button.style.display = 'none';

    // now get the active chrome tab
    chrome.tabs.getSelected(null, function (tab) {

      // check if our iframe exists already
      if (!(iframe && iframe.length)) {

        var fullUrl = url + '/index.php?siteurl=' + tab.url;

        // if not, create a new iframe for our content
        iframe = document.createElement('iframe');
        iframe.setAttribute('width', '800px');
        iframe.setAttribute('height', '600px');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('id', 'gfw_iframe');

        // set its URL to be the page we want
        iframe.setAttribute('src', fullUrl);

        // and add it to the document
        document.body.appendChild(iframe);
      }
    });

  }, false);

}, false);
