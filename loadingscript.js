setTimeout(loadHomePage, 5000);

function loadHomePage() {
  window.location.href = "index.html";
}

let url = "https://uselessfacts.jsph.pl//random.json?language=en";

let loadRandomFact = function () {
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      $(".loading-text").html(data.text);
    });
};
loadRandomFact();
