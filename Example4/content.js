// content.js

//alert("Hello from: "+window.location.href);

var firstHref = $("a[href^='http']").attr("href");

console.log(firstHref);
