const onePlayerGame = (numRound, sidedDice) => {

    let roundCounter = 0
    let rollArray = [];

    while(roundCounter <= numRound) {
        let roll = Math.floor(Math.random() * sidedDice)
        roundCounter ++
        rollArray.push(roll)
    }
    return rollArray
}

console.log(onePlayerGame(5, 6))
    

