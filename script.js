let userName = window.prompt("Hi!\nWhat's your name?");

// Determine random number between 1 and 50
let randomNumber = Math.floor(Math.random() * 51) + 1;
console.log(randomNumber);
// Prompt user to guess a random number (1)
let userGuess1 = window.prompt(`${userName}, please guess a number between 1 and 50.`);

// NOTE: If a user's guess is incorrect, respond with a prompt letting them know whether or not their guess was too high or too low and how many chances remain.
if (userGuess1 == randomNumber) {
    window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
}



// Prompt user to guess a random number (2)
let userGuess2 = window.prompt(`${userName}, please guess another random number between 1 and 50.`);

if (userGuess2 == randomNumber) {
    window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
}



// Prompt user to guess a random number (3)
let userGuess3 = window.prompt(`${userName}, please guess one more random number between 1 and 50.`);

if (userGuess3 == randomNumber) {
    window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
}