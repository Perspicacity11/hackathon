Roll the dice:

v1: one player
- Take two numbers as argument, one referring to the number of faces on the dice; and the other referring to the number of rolls in the game
- When the function is called, returns a random whole number from between one and number inputted; increment some round counter

PSUEDOCODE:

function onePlayerGame (number of rounds, number of faces on the die)

let roundCounter = 0
let rollarray = []
while (roundCounter >= number of rounds)
    roll dice (Math.random(up to number of faces on the die))
    push roll into roll array
return rollarray

---------------------------------------



v2: two player
- Takes one number as argument (the target)
- Function for rolling a six-sided dice, and whoever of two players gets the closest number to the target on their roll, wins the round
- Increment a 'rounds won' counter
- Later: add functionality to use different dice (with more faces), and a desired number of rounds