const apikey = "6207718034fd6215658583f4";
$("#registerForm").submit(() => false);

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
        window.location.href = "./login.html";
    });
});