(() => {
    if ($('body').hasClass('index')) {
        const param = new URLSearchParams(window.location.search);
        const username = param.get('username');

    }
})();

(() => {
    const username = sessionStorage.getItem('username')
    const streakCounter = sessionStorage.getItem('streak-counter')
    const hasUsername = !(username === '' | username === null | username === undefined)

    if (hasUsername) {
        $("#current-username")[0].innerText = `Hello ${username}!`;
        console.log(username)
    }


})();