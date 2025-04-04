const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ------------------------------

const onePlayerGame = (numRound, sidedDice) => {

    if (!numRound || numRound < 0 || typeof(numRound) === "string") {
        return "Invalid entry"
    } else if(sidedDice < 4) { // we assume that the die used has at least four faces
        return "Invalid die"
    } else if (!sidedDice) {
        sidedDice = 6 // default to a six sided die
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

// ------------------------------

const twoPlayerGame = (numRound, target, sidedDice) => {

    let minRoll = 1;
    let roundCounter = 0;
    let playerOneWins = 0;
    let playerTwoWins = 0;
    let drawCount = 0;

    if (!numRound || numRound < 0 || typeof(numRound) === "string") {
        return console.log("Invalid entry: input must be a number")
    } else if (!target || target < minRoll || target > sidedDice || typeof(target) === "string") {
        return console.log("Invalid target: target must be between 1 and the number of sides on the die")
    } else if(sidedDice < 4) { // we assume that the die used has at least four faces
        return console.log("Invalid die: a die must have at least four sides")
    } else if (!sidedDice || typeof(sidedDice) !== "number") {
        sidedDice = 6 // default to a six sided die
    }

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
    console.log(`PLAYER ONE: ${playerOneWins} WINS | PLAYER TWO: ${playerTwoWins} WINS | ${drawCount} DRAWS`)
}

// ------------------------------

rl.question(`Enter number of players: `, playerNum => {
    if (playerNum == 2) {
        rl.question(`Enter number of rounds: `, numRound => {
            rl.question(`Enter target number: `, target => {
                    rl.question(`Enter number of sides on the die: `, sidedDice => {
                        twoPlayerGame(parseInt(numRound), parseInt(target), parseInt(sidedDice))
        rl.close();}
        )})})
    }

    else if (playerNum == 1) {
        rl.question(`Enter number of rounds: `, numRound => {
            rl.question(`Enter number of sides on the die: `, sidedDice => {
                onePlayerGame(parseInt(numRound), parseInt(sidedDice))
        rl.close();
        })})
    }
    else {
        console.log("Invalid entry: this game supports one or two players only")
        rl.close()
    }
})