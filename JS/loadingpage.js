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

setTimeout(loadLoginPage, 5000);
loadUselessFacts();

function loadLoginPage() {
    window.location.href = "../HTML/login.html";
}