// content.js

//alert("Hello from: "+window.location.href);

var firstHref = $("a[href^='http']").attr("href");

var body = $('body').text();

console.log(body);
