const arcButton = document.getElementById('arcBuyButton')

// ! this is for disabling upgrade / buy buttons when you dont have enough to buy them
// (to eliminate need for if statements inside buy functions)

function checkUpgrades() {
    switch (cookies) {
        case cookies >= 5:
            console.log('cookies >= 5')
            break;
        case cookies >= 10:
            break;
    }
}

// todo - set up upgrades n shit

// ! how to set add new upgrades!
// step 1: add new case to switch (cookies)
// step 2: make button in the html
// step 3: if something breaks, ask aj