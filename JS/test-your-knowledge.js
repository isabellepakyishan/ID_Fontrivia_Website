let updatingStreakScore = sessionStorage.getItem('streak-score');

function loadClient() {
    gapi.client.setApiKey("AIzaSyCYXVUXYdjLi5O-bJLmxgrpzQtiBv_T_ic");
    return gapi.client
        .load("https://www.googleapis.com/discovery/v1/apis/webfonts/v1/rest")
        .then(
            function () {
                console.log("GAPI client loaded for API");
            },
            function (err) {
                console.error("Error loading GAPI client for API", err);
            }
        );
}
// Make sure the client is loaded before calling this method.
function execute() {
    return gapi.client.webfonts.webfonts.list({}).then(
        function (response) {
            const fontArray = [];
            for (let i=0; i < response.result.items.length; i++){
                fontArray.push(response.result.items[i].family)
            }
            const filteredFonts = fontArray.filter(font => !font.startsWith("Noto") && !font.startsWith("Siemreap"));
            const ranFontIndex = Math.floor(
                Math.random() * filteredFonts.length
            );
            console.log("Response", filteredFonts[ranFontIndex]);
            const fontName = filteredFonts[ranFontIndex];

            WebFont.load({
                google: {
                    families: [fontName],
                },
            });

            $("#setwords").css("font-family", fontName);

            console.log("Font name:", fontName);
            const fontCategory = response.result.items[ranFontIndex].category;
            console.log("Font Category:", fontCategory);

            const options = [
                '#sans-serif-option',
                '#serif-option',
                '#monospace-option',
                '#display-option',
                '#script-option'
            ]

            const categories = [
                'sans-serif',
                'serif',
                'monospace',
                'display',
                'handwriting'
            ]

            const idxCat = categories.indexOf(fontCategory);

            for (let i = 0; i < options.length; i++) {
                const option = options[i];

                $(option).unbind('click');

                if (i == idxCat) {
                    $(option).on('click', function () {
                        updatingStreakScore++
                        sessionStorage.setItem('streak-score', updatingStreakScore)

                        alert('Your answer is correct!')
                        execute();
                    })
                } else {
                    $(option).on('click', function () {
                        updatingStreakScore = 0
                        sessionStorage.setItem('streak-score', updatingStreakScore)

                        alert('Your answer is incorrect. Your streak score has been reset to 0 :((')
                    })
                }
            }

        },
        function (err) {
            console.error("Execute error", err);
        },
    );
}
gapi.load("client");

$("#firstLoad").on("click", function () {
    $(this).hide();
});

(() => {
    const username = sessionStorage.getItem('username')
    const hasUsername = !(username === '' | username === null | username === undefined)

    if (hasUsername) {
        $("#current-username")[0].innerText = `Hello ${username}!`;
        console.log(username)
    }


})();