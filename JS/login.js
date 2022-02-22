const apikey = "6207718034fd6215658583f4";

$("#loginForm").submit(() => false);

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
            let tempApiId = response[i]["_id"];
            let tempUsername = response[i]["username"];
            let tempEmailAdd = response[i]["email-address"];
            let tempPassword = response[i]["password"];
            let tempStreakScore = response[i]["streak-score"];

            if (
                enteredEmailAdd == tempEmailAdd &&
                enteredPassword == tempPassword
            ) {
                alert(`Login Successful. Welcome ${tempUsername}!`);
                setTimeout(loadMainPage, 1000);

                function loadMainPage() {
                    window.location.href = `./index.html?username=${tempUsername}`;

                    sessionStorage.setItem('api-id', tempApiId);
                    sessionStorage.setItem('username', tempUsername);
                    sessionStorage.setItem('email-address', tempEmailAdd);
                    sessionStorage.setItem('password', tempPassword)
                    sessionStorage.setItem('streak-score', tempStreakScore);
                    return;
                }
                return;
            }
        }
        alert("Login Not Successful");

    }).fail(function () {
        alert(`Login Unsuccessful. Please try again.`);
    });

});