const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const onePlayerGame = (numRound, sidedDice) => {

    if (!numRound || numRound < 0 || typeof(numRound) === "string") {
        return "Invalid entry"
    } else if( sidedDice < 4) {
        return "Invalid die"
    } // we assume that the die used has at least four faces
    
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

rl.question(`Enter number of games: `, num => {
    num = parseInt(num)
    onePlayerGame(num, 6)
    rl.close();
  });

// console.log(onePlayerGame(10, 6))
// console.log(onePlayerGame(15, 30))
// console.log(onePlayerGame("Hi", 6))
// console.log(onePlayerGame(10, 3))




