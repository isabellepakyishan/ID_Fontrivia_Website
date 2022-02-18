$("#user-logout").on("click", function () {
    const finalApiKey = sessionStorage.getItem('api-id')
    const finalUsername = sessionStorage.getItem('username')
    const finalEmailAdd = sessionStorage.getItem('email-address')
    const finalPassword = sessionStorage.getItem('password')
    const finalStreakScore = sessionStorage.getItem('streak-score')

    var jsondata = {
        "username": finalUsername,
        "email-address": finalEmailAdd,
        "password": finalPassword,
        "streak-score": finalStreakScore
    };
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://fontrivia-0c30.restdb.io/rest/user-login/${finalApiKey}`,
        "method": "PUT",
        "headers": {
            "content-type": "application/json",
            "x-apikey": '6207718034fd6215658583f4',
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        window.location.href = 'login.html';
    });
})