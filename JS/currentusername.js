(() => {
    if ($('body').hasClass('index')) {
        const param = new URLSearchParams(window.location.search);
        const username = param.get('username');

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

(() => {
    const username = sessionStorage.getItem('username')
    const streakCounter = sessionStorage.getItem('streak-counter')
    const hasUsername = !(username === '' | username === null | username === undefined)

    if (hasUsername) {
        $("#current-username")[0].innerText = `Hello ${username}!`;
        console.log(username)
    }


})();