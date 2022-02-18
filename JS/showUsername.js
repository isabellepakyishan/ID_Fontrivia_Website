    (() => {
        const username = sessionStorage.getItem('username')
        const hasUsername = !(username === '' | username === null | username === undefined)

        if (hasUsername) {
            $("#current-username")[0].innerText = `Hello ${username}!`;
            console.log(username)
        }
    })();