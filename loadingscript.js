setTimeout(loadHomePage, 4000);

function loadHomePage() {
  window.location.href =
    "file:///D:/ID/Assignment%202%20(Fontrivia%20Website)/ID_Fontrivia_Website/index.html";
}

let url = "https://uselessfacts.jsph.pl//random.json?language=en";

let newprofile = function () {
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      $(".loading-text").html(data.text);
    });
};
newprofile();
