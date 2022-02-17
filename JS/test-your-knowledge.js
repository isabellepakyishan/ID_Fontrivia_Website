var ranFontIndex;
var fontName;
var fontCategory;
var correctCounter;

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
            ranFontIndex = Math.floor(
                Math.random() * response.result.items.length
            );
            console.log(ranFontIndex);
            console.log("Response", response.result.items[ranFontIndex]);
            fontName = response.result.items[ranFontIndex].family;

            WebFont.load({
                google: {
                    families: [fontName],
                },
            });

            $("#setwords").css("font-family", fontName);

            console.log("Font name:", fontName);
            fontCategory = response.result.items[ranFontIndex].category;
            console.log("Font Category:", fontCategory);

            $("#sans-serif-option").on("click", function () {
                if (fontCategory == "sans-serif") {
                    alert("Correct");
                }
            });
            $("#serif-option").on("click", function () {
                if (fontCategory == "serif") {
                    alert("Correct");
                }
            });
            $("#monospace-option").on("click", function () {
                if (fontCategory == "monospace") {
                    alert("Correct");
                }
            });
            $("#display-option").on("click", function () {
                if (fontCategory == "display") {
                    alert("Correct");
                }
            });
            $("#script-option").on("click", function () {
                if (fontCategory == "handwriting") {
                    alert("Correct");
                }
            })
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

// $("#sans-serif-option").on("click", function () {
//     if (fontCategory == "sans-serif") {
//         alert("Correct");
//     } else {
//         alert("Wrong");
//     }
// })