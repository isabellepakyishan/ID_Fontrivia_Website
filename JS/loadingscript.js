// Script for Loading Page
setTimeout(loadHomePage, 4000);

function loadHomePage() {
  window.location.href = "index.html";
}

let uselessFactsAPI = "https://uselessfacts.jsph.pl//random.json?language=en";

let loadRandomFact = function () {
  fetch(uselessFactsAPI)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      $(".loading-text").html(data.text);
    });
};
loadRandomFact();

//Script for Main Page
let fontsAPI =
  "https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyCYXVUXYdjLi5O-bJLmxgrpzQtiBv_T_ic";

let loadFont = function () {
  fetch(fontsAPI)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      $(".loading-text").html(data.text);
    });
};
loadFont();
