let userName = window.prompt("Hi!\nWhat's your name?");

// Determine random number between 1 and 50
let randomNumber = Math.floor(Math.random() * 51) + 1;
// Prompt user to guess a random number
let userGuess1 = window.prompt(`${userName}, please guess a number between 1 and 50.`);
