let userName = window.prompt("Hi!\nWhat's your name?");
    console.log(userName);
// Validate user's input as a name
if (userName && (isNaN(userName)) && (userName.length >= 2)) {
    console.log(userName);
} else if (userName && (isNaN(userName)) && (userName.length < 2)) {
    userName = window.prompt("Hmmm... That looks like an initial. What's your first name?"); 
} else if (isNaN(userName) === false) {
    userName = window.prompt("Hmmm... That looks like a number. What's your first name?");
} else {
    userName = window.prompt("Hmmm... That doesn't look like a name. What's your first name?");
}

// Determine random number between 1 and 50
let randomNumber = Math.floor(Math.random() * 51) + 1;
console.log(randomNumber);
let usedGuesses = 0;
// Prompt user to guess a random number (1)
let userGuess1 = window.prompt(`${userName}, please guess a number between 1 and 50.`);
usedGuesses ++;
let remainingGuesses = 3 - usedGuesses;

// Prompt user to guess a random number (1)
if (userGuess1 == randomNumber) {
    window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
} else if (userGuess1 > randomNumber) {
    window.alert(`Incorrect! Your guess was too high. You have ${remainingGuesses} guesses remaining.`);
} else if (userGuess1 < randomNumber) {
    window.alert(`Incorrect! Your guess was too low. You have ${remainingGuesses} guesses remaining.`);
}



// Prompt user to guess a random number (2)
let userGuess2 = window.prompt(`${userName}, please guess another random number between 1 and 50.`);
usedGuesses ++;
remainingGuesses = 3 - usedGuesses;

if (userGuess2 == randomNumber) {
    window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
} else if (userGuess2 > randomNumber) {
    window.alert(`Incorrect! Your guess was too high. You have ${remainingGuesses} guess remaining.`);
} else if (userGuess2 < randomNumber) {
    window.alert(`Incorrect! Your guess was too low. You have ${remainingGuesses} guess remaining.`);
}



// Prompt user to guess a random number (3)
let userGuess3 = window.prompt(`${userName}, please guess one more random number between 1 and 50.`);
usedGuesses ++;
remainingGuesses = 3 - usedGuesses;

if (userGuess3 == randomNumber) {
    window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
} else if (userGuess3 > randomNumber) {
    window.alert(`Incorrect! Your guess was too high. You have ${remainingGuesses} guesses remaining.`);
} else if (userGuess3 < randomNumber) {
    window.alert(`Incorrect! Your guess was too low. You have ${remainingGuesses} guesses remaining.`);
    window.alert(`Sorry, ${userName}, you did not guess the correct number. It was ${randomNumber}. Play again?`);
}
