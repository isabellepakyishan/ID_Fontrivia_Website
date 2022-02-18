        (() => {
            const username = sessionStorage.getItem('username')
            const emailAddress = sessionStorage.getItem('email-address')
            const streakScore = sessionStorage.getItem('streak-score')

            const hasUsername = !(username === '' | username === null | username === undefined)

            if (hasUsername) {
                $("#current-username")[0].innerText = `Hello ${username}!`;
                console.log(username)
            }

            if (streakScore == null || streakScore == undefined){
                streakScore = 0;
            }

            $("#user-username")[0].innerText = `${username}`;
            $("#user-email")[0].innerText = `${emailAddress}`;
            $("#user-streakScore")[0].innerText = `${streakScore}`;

        })();