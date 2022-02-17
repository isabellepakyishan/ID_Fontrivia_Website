// import {
//     currentUsername
// } from '../JS/login.js'

(() => {
    const param = new URLSearchParams(window.location.search);
    const username = param.get('username');
    $("#current-username")[0].innerText = `Hello ${username}!`;
    if ($('body').hasClass('index')) {
        const param = new URLSearchParams(window.location.search);
        const username = param.get('username');
        $("#current-username")[0].innerText = `Hello ${username}!`;
    }

    // if ($("body").hasClass("index")) {
    //     const param = new URLSearchParams(window.location.search);
    //     const username = param.get('username');
    //     $("#current-username")[0].innerText = `Hello ${username}!`;
    //     window.location.href = `../../HTML/index.html?username=${currentUsername.finalUsername}`
    // }
    // if ($("body").hasClass("display")) {
    //     const param = new URLSearchParams(window.location.search);
    //     const username = param.get('username');
    //     $("#current-username")[0].innerText = `Hello ${username}!`;
    //     window.location.href = `../../HTML/Typography/display.html?username=${currentUsername.finalUsername}`
    // }
})();

// if ($("body").hasClass("display")) {
//     const param = new URLSearchParams(window.location.search);
//     const username = param.get('username');
//     $("#current-username")[0].innerText = `Hello ${username}!`;
//     window.location.href = `../../HTML/display.html?username=${currentUsername.finalUsername}`
// }