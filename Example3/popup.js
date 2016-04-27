// called when our popup is loaded
document.addEventListener('DOMContentLoaded', function () {

  var url = 'http://www.greatfirewallofchina.org';

  // select our page elements
  var button = document.getElementById('gfw_button'),
    content = document.getElementById('gfw_div');
    
  // add a listener for when its clicked
  button.addEventListener('click', function () {

    // once its clicked, we can hide it
    button.style.display = 'none';
    content.innerHTML = "loading...";

    // now find the active chrome tab
    chrome.tabs.getSelected(null, function (tab) {

      var fullUrl = url + '/index.php?siteurl=' + tab.url;

      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {

        if (xhr.readyState == XMLHttpRequest.DONE) {

          var match = xhr.responseText.match(/(<table .*?<\/table>)/gm);
          if (match && match.length) {

            content.innerHTML = match[0]; // load our content into the div

          } else {

            content.innerHTML = "<h4>Sorry, an error occurred</h4>";
          }
        }
      }
      xhr.open('GET', fullUrl, true);
      xhr.send(null);
    });

  }, false);

}, false);
