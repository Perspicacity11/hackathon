SUMMARY

This tool allows one or two players to roll a dice - with a given number of faces - a given number of times. The one player game is a simple randomised roll generator, while the two player game sets a target number and rolls a dice for each player wherein the winner is the player whose roll is closest to the target.

The tool uses the readline function to accept the following input from the command line:

1) Number of players
2) Desired number of rolls in the game
3) Desired number of faces on the die
4) The target number (two-player game only)

The tool then uses these inputs to play the game. Both games print details of the roll to the console, but only the two player game returns a score breakdown with wins/losses/draws. 

INSTALLATION

Once you have cloned the repository into your local environment, navigate to the 'hackathon' subdirectory and install the dependencies with:
```
npm i
```

To initiate the game, run this code in the command line:
```
npm run play
```

BUGS:
- Input validation does not break out of the conditional when it recieves an incorrect input, only throws the error after all the inputs are recieved


POTENTIAL BUILDS

- One potential new function would be to allow the game to accept any number of players, within a reasonable range. We would expect that the tool could dynamically instantiate the Player(x)roll variable - which would probably need to be constructed as a class - according to input given by the user, and then render the scores for all of those players for that round in the console, ultimately determining a winner across the full number of players and rounds

---------------------------------------
NOTES
---------------------------------------

Roll the dice v1: one player
- Take two numbers as argument, one referring to the number of faces on the die; and the other referring to the number of rolls in the game
- When the function is called, returns a random whole number from between one and number inputted; increments round counter
- Returns scores for the number of rolls inputted

PSUEDOCODE:

function onePlayerGame (number of rounds, number of faces on the die)

let roundCounter = 0
let rollarray = []
while (roundCounter >= number of rounds)
    roll dice (Math.random(up to number of faces on the die))
    push roll into roll array
return rollarray

---------------------------------------

Roll the dice v2: two player
- Takes three numbers as argument (the target, die faces and round number)
- Function for rolling a six-sided dice, and whoever of two players gets the closest number to the target on their roll, wins the round
- Increment a 'rounds won' counter
- Later: add functionality to use different dice (with more faces), and a desired number of rounds

Both players using the same command line

Steps:
- Call the function, input the number of rounds and the target number
- Player one rolls, save the score
- Player two rolls, save the score
- Function determines who got closer to the target, iterates a score count for the - winning player
- Overall winner is the player that has the most winning rolls
