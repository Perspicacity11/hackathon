const onePlayerGame = (numRound, sidedDice) => {

    let roundCounter = 0
    let rollArray = [];
    let minRoll = 1;

    while(roundCounter < numRound) {
        let roll = Math.floor(Math.random() * (sidedDice - minRoll + 1) + minRoll)
        roundCounter ++
        rollArray.push(roll)
    }
    return rollArray
}

console.log(onePlayerGame(10, 6))
    

