// const readline = require('node:readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const onePlayerGame = (numRound, sidedDice) => {

    if (!numRound || numRound < 0 || typeof(numRound) === "string") {
        return "Invalid entry"
    } else if( sidedDice < 4) { // we assume that the die used has at least four faces
        return "Invalid die"
    } 
    
    let roundCounter = 0
    let rollArray = [];
    let minRoll = 1;

    while(roundCounter < numRound) {
        let roll = Math.floor(Math.random() * (sidedDice - minRoll + 1) + minRoll)
        roundCounter ++
        rollArray.push(roll)
    }
    
    let rollNum = 1

    for (let index = 0; index < rollArray.length; index++) {
        console.log(`ROLL ${rollNum}: ${rollArray[index]}`)
        rollNum ++
    }
}

// rl.question(`Enter number of rolls: `, num => {
//     num = parseInt(num)
//     onePlayerGame(num, 6)
//     rl.close();
//   });

// console.log(onePlayerGame(10, 6))
// console.log(onePlayerGame(15, 30))
// console.log(onePlayerGame("Hi", 6))
// console.log(onePlayerGame(10, 3))

// ------------------------------

const twoPlayerGame = (numRound, target, sidedDice) => {

    let minRoll = 1;
    let roundCounter = 0
    let playerOneWins = 0;
    let playerTwoWins = 0;
    let drawCount = 0

    console.log(`Target: ${target} \n`)

    while(roundCounter < numRound) {
        let playerOneRoll = Math.floor(Math.random() * (sidedDice - minRoll + 1) + minRoll)
        let playerTwoRoll = Math.floor(Math.random() * (sidedDice - minRoll + 1) + minRoll)
        if (Math.abs(playerOneRoll - target) < Math.abs(playerTwoRoll - target)) {
            console.log(`ROUND ${(roundCounter) + 1}: Player One rolled ${playerOneRoll} and Player Two rolled ${playerTwoRoll}`)
            console.log('Player One wins the round \n')
            playerOneWins ++
        }
        else if (playerOneRoll === playerTwoRoll){
            console.log(`ROUND ${(roundCounter) + 1}: Player One rolled ${playerOneRoll} and Player Two rolled ${playerTwoRoll}`)
            console.log('Draw \n')
            drawCount ++
        }
        else {
            console.log(`ROUND ${(roundCounter) + 1}: Player One rolled ${playerOneRoll} and Player Two rolled ${playerTwoRoll}`)
            console.log('Player Two wins the round \n')
            playerTwoWins ++
        }
        roundCounter ++
    }

    if (playerOneWins > playerTwoWins) {
        console.log(`Player One wins the game!`)
    } else if (playerOneWins === playerTwoWins) {
        console.log(`The game is a draw!`)
    } else {
        console.log(`Player Two wins the game!`)
    }

    return `PLAYER ONE: ${playerOneWins} WINS | PLAYER TWO: ${playerTwoWins} WINS | ${drawCount} DRAWS`
}




console.log(twoPlayerGame(8, 18, 6))
