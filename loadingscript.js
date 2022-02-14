const apikey = "6207718034fd6215658583f4";

$("#registerForm").submit(() => false);

function checkCurrentPage() {
  //Script for loadingpage.html
  if ($("body").hasClass("loadingpage")) {
    setTimeout(loadLoginPage, 5000);

    function loadLoginPage() {
      window.location.href = "login.html";
    }

    let uselessFactsAPI =
      "https://uselessfacts.jsph.pl//random.json?language=en";

    let loadRandomFact = function () {
      fetch(uselessFactsAPI)
        .then((response) => response.json())
        .then(function (data) {
          console.log(data);
          $(".loading-text").html(data.text);
        });
    };
    loadRandomFact();
  }

  //Script for register.html
  if ($("body").hasClass("register")) {
    $("#psw, #psw-repeat").on("keyup", function () {
      if ($("#psw").val() == $("#psw-repeat").val()) {
        $("#message").html("Password is a match").css("color", "green");
      } else {
        $("#message").html("Password does not match").css("color", "red");
      }
    });

    $("#register").on("click", function () {
      alert("Starting registration");
      let emailAdd = $("#email").val();
      let password = $("#psw-repeat").val();
      let jsondata = { "email-address": emailAdd, password: password };
      let settings = {
        async: true,
        crossDomain: true,
        url: "https://fontrivia-0c30.restdb.io/rest/user-login",
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-apikey": apikey,
          "cache-control": "no-cache",
        },
        processData: false,
        data: JSON.stringify(jsondata),
      };

      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    });
  }

  //Script for login.html
  if ($("body").hasClass("login")) {
  }

  //Script for index.html
  if ($("body").hasClass("index")) {
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
  }
}

checkCurrentPage();

// // Script for Loading Page
// setTimeout(loadLoginPage, 5000);

// function loadLoginPage() {
//   window.location.href = "login.html";
// }

// let uselessFactsAPI = "https://uselessfacts.jsph.pl//random.json?language=en";

// let loadRandomFact = function () {
//   fetch(uselessFactsAPI)
//     .then((response) => response.json())
//     .then(function (data) {
//       console.log(data);
//       $(".loading-text").html(data.text);
//     });
// };
// loadRandomFact();

// //Script for Register an Account page

// //Script for Main Page
// let fontsAPI =
//   "https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyCYXVUXYdjLi5O-bJLmxgrpzQtiBv_T_ic";

// let loadFont = function () {
//   fetch(fontsAPI)
//     .then((response) => response.json())
//     .then(function (data) {
//       console.log(data);
//       $(".loading-text").html(data.text);
//     });
// };
// loadFont();
