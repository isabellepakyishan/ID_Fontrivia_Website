(() => {
    const param = new URLSearchParams(window.location.search);
    const username = param.get('username');
    $("#current-username")[0].innerText = `Hello ${username}!`;
    // if ($('body').hasClass('index')) {
    //     const param = new URLSearchParams(window.location.search);
    //     const username = param.get('username');
    //     $("#current-username")[0].innerText = `Hello ${username}!`;
    // }
})();