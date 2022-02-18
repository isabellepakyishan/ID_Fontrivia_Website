let updatingStreakScore = sessionStorage.getItem('streak-score');

if (isNaN(updatingStreakScore)) {
    updatingStreakScore = 0;
}

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
            const fontArray = ["Alex Brush", "Fira Mono", "News Cycle", "Festive", "Erica One", "Bree Serif", "Cuprum", "Actor", "Dosis", "Faustina", "Trirong", 
            "Just Me Again Down Here", "New Rocker", "Archivo", "Goblin One", "Galindo", "Reem Kufi", "Fanwood Text", "Kolker Brush", "Yantramanav", "IM Fell Double Pica",
            "Cedarville Cursive", "Arbutus", "Junge", "Bitter", "Charm", "Cambo", "Merienda", "Boogaloo", "Euphoria Script", "Laila", "Chivo", "Linden Hill", "Kodchasan", 
            "Londrina Shadow", "Skranji", "Arya", "Capriola", "Rokkitt", "Caladea", "Cabin Sketch", "Big Shoulders Inline Text", "Fontdiner Swanky", "Moon Dance", "Mulish", 
            "Fleur De Leah", "Belgrano", "Mako", "Martel Sans", "Quattrocento Sans", "Adamina", "Karma", "Dawning of a New Day", "Diplomata SC", "Assistant", "Libre Baskerville", 
            "Overpass", "Cherish", "Kaisei Tokumin", "Birthstone", "Share", "Cardo", "Modak", "Geostar", "Cousine", "Bungee Shade", "Michroma", "Glegoo", "Charmonman", "Inconsolata", 
            "Source Code Pro", "Nanum Gothic Coding", "Fira Mono", "Cutive Mono", "Oxygen Mono", "Syne Mono", "Azeret Mono", "DM Mono", "JetBrains Mono", "Courier Prime", "IBM Plex Mono", 
            "Ubuntu Mono"]

            const fontCategoryArray = ["handwriting", "monospace", "sans-serif", "handwriting", "display", "serif", "sans-serif", "sans-serif", "sans-serif", "serif", "serif",
            "handwriting", "display", "sans-serif", "display", "display", "sans-serif", "serif", "handwriting", "sans-serif", "serif",
            "handwriting", "display", "serif", "serif", "handwriting", "serif", "handwriting", "display", "handwriting", "sans-serif", "sans-serif", "serif", "sans-serif",
            "display", "display", "sans-serif", "sans-serif", "serif", "serif", "display", "display", "display", "handwriting", "sans-serif",
            "handwriting", "serif", "sans-serif", "sans-serif", "sans-serif", "serif", "serif", "handwriting", "display", "sans-serif", "serif",
            "sans-serif", "handwriting", "serif", "handwriting", "display", "serif", "display", "display", "monospace", "display", "sans-serif", "serif", "handwriting", "monospace",
            "monospace", "monospace", "monospace", "monospace", "monospace", "monospace", "monospace", "monospace", "monospace", "monospace", "monospace", "monospace"];

            console.log (fontArray.length)
            console.log (fontCategoryArray.length)

            const ranFontIndex = Math.floor(
                Math.random() * fontArray.length
            );
            const fontName = fontArray[ranFontIndex];
            const fontCategory = fontCategoryArray[ranFontIndex];

            WebFont.load({
                google: {
                    families: [fontName],
                },
            });

            $("#setwords").css("font-family", fontName);

            console.log("Font name:", fontName);
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

                        alert('Your answer is correct! Streak: ' + updatingStreakScore)
                        execute();
                    })
                } else {
                    $(option).on('click', function () {
                        updatingStreakScore = 0
                        sessionStorage.setItem('streak-score', updatingStreakScore)

                        alert('Your answer is incorrect. Your streak score has been reset to 0 :(')
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