const apikey = "6207718034fd6215658583f4";
let currentUsername = " ";

function loadUselessFacts() {
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
}

$("#registerForm").submit(() => false);
$("#loginForm").submit(() => false);

function checkCurrentPage() {
  //Script for loadingpage.html
  if ($("body").hasClass("loadingpage")) {
    setTimeout(loadLoginPage, 5000);
    loadUselessFacts();

    function loadLoginPage() {
      window.location.href = "../HTML/login.html";
    }
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
      let userName = $("#username").val();
      let emailAdd = $("#email").val();
      let password = $("#psw-repeat").val();
      let jsondata = {
        username: userName,
        "email-address": emailAdd,
        password: password
      };
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
        console.log(`Data for ${userName} has been added.`)
        alert("Registration successful. Click [OK] to login.");
        window.location.href = "../HTML/login.html";
      });
    });
  }

  //Script for login.html
  if ($("body").hasClass("login")) {
    $("#login").on("click", function () {
      let enteredEmailAdd = $("#email").val();
      let enteredPassword = $("#psw").val();

      var settings = {
        async: true,
        crossDomain: true,
        url: "https://fontrivia-0c30.restdb.io/rest/user-login",
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-apikey": apikey,
          "cache-control": "no-cache",
        },
      };

      $.ajax(settings).done(function (response) {
        for (var i = 0; i < response.length; i++) {
          let tempUsername = response[i]["username"];
          let tempEmailAdd = response[i]["email-address"];
          let tempPassword = response[i]["password"];

          if (
            enteredEmailAdd == tempEmailAdd &&
            enteredPassword == tempPassword
          ) {
            alert(`Login Successful. Welcome ${tempUsername}!`);
            currentUsername = tempUsername;
            setTimeout(loadMainPage, 1000);

            function loadMainPage() {
              window.location.href = `../HTML/index.html?username=${tempUsername}`;
            }
          }
        }
      });
    });
  }
}


(() => {
  if ($('body').hasClass('index')) {
    const param = new URLSearchParams(window.location.search);
    const username = param.get('username');
    $("#current-username")[0].innerText = `Hello ${username}!`;
  }
})();

checkCurrentPage();