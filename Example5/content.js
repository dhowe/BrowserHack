// content.js

// Create the text for the CSS we need for our font
var fontFace = '@font-face { font-family: Redacted; src: url("' +
  chrome.extension.getURL('fonts/redacted-regular.woff') + '"); }';

// Create a style tag for our CSS and inject it into the page
$("<style>").prop("type", "text/css").html(fontFace).appendTo("head");

// Apply our font-family to *every* element (in black)
$("*")
  .css('font-family', 'Redacted')
  .css('color', '#000')
  .css('background', 'none');
