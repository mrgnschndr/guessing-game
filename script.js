function game() {
let userName = window.prompt("Hi!\nWhat's your name?");
    console.log(userName);
// Validate user's input as a name
if (userName && (isNaN(userName)) && (userName.length >= 2)) {
    console.log(userName);
} else if (userName && (isNaN(userName)) && (userName.length < 2)) {
    userName = window.prompt("Hmmm... That looks like an initial. What's your first name?"); 
} else if (userName && isNaN(userName) === false) {
    userName = window.prompt("Hmmm... That looks like a number. What's your first name?");
} else if (userName === null) {
    document.stop();
} else {
    userName = window.prompt("Hmmm... That doesn't look like a name. What's your first name?");
}
// Assign User as name in case of invalid name at 2nd prompt
if ((isNaN(userName) === false) || (userName.length < 2) || (userName === false)) {
    userName = "User";
}

// Determine random number between 1 and 50
let randomNumber = Math.floor(Math.random() * 51) + 1;
console.log(randomNumber);
let usedGuesses = 0;
// Prompt user to guess a random number (1)
let userGuess1 = window.prompt(`${userName}, please guess a number between 1 and 50.`);
usedGuesses ++;
if (userGuess1 === null) {
    document.stop();
}
let remainingGuesses = 3 - usedGuesses;

// Prompt user to guess a random number (1)
if (userGuess1 == randomNumber) {
    window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
    let playAgain = window.confirm(`Want to play again, ${userName}?`);
        if (playAgain === true) {
            game();
        } else {
            document.stop();
        }
} else if (userGuess1 > randomNumber) {
    window.alert(`Incorrect! Your guess was too high. You have ${remainingGuesses} guesses remaining.`);
} else if (userGuess1 < randomNumber) {
    window.alert(`Incorrect! Your guess was too low. You have ${remainingGuesses} guesses remaining.`);
} else {
    window.alert(`Hmmm... That doesn't look like a number. Go ahead and guess again. You have ${(remainingGuesses + 1)} guesses remaining.`);
    userGuess1 = window.prompt(`${userName}, please guess a number between 1 and 50.`);
    if (userGuess1 == randomNumber) {
        window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
        playAgain = window.confirm(`Want to play again, ${userName}?`);
        if (playAgain === true) {
            game();
        } else {
            document.stop();
        }
    } else if (userGuess1 > randomNumber) {
        window.alert(`Incorrect! Your guess was too high. You have ${remainingGuesses} guesses remaining.`);
    } else if (userGuess1 < randomNumber) {
        window.alert(`Incorrect! Your guess was too low. You have ${remainingGuesses} guesses remaining.`);
    } else if (userGuess1 === null) {
        document.stop();
    } else {
        window.alert(`Incorrect! You did not guess a number. You have ${remainingGuesses} guesses remaining.`);
    }
}


// Prompt user to guess a random number (2)
let userGuess2 = window.prompt(`${userName}, please guess another random number between 1 and 50.`);
usedGuesses ++;
remainingGuesses = 3 - usedGuesses;
if (userGuess2 === null) {
    document.stop();
}

if (userGuess2 == randomNumber) {
    window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
    playAgain = window.confirm(`Want to play again, ${userName}?`);
        if (playAgain === true) {
            game();
        } else {
            document.stop();
        }
} else if (userGuess2 > randomNumber) {
    window.alert(`Incorrect! Your guess was too high. You have ${remainingGuesses} guess remaining.`);
} else if (userGuess2 < randomNumber) {
    window.alert(`Incorrect! Your guess was too low. You have ${remainingGuesses} guess remaining.`);
} else {
    window.alert(`Hmmm... That doesn't look like a number. Go ahead and guess again. You have ${(remainingGuesses + 1)} guesses remaining.`);
    userGuess2 = window.prompt(`${userName}, please guess a number between 1 and 50.`);
    if (userGuess2 == randomNumber) {
        window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
        playAgain = window.confirm(`Want to play again, ${userName}?`);
        if (playAgain === true) {
            game();
        } else {
            document.stop();
        }
    } else if (userGuess2 > randomNumber) {
        window.alert(`Incorrect! Your guess was too high. You have ${remainingGuesses} guess remaining.`);
    } else if (userGuess2 < randomNumber) {
        window.alert(`Incorrect! Your guess was too low. You have ${remainingGuesses} guess remaining.`);
    } else if (userGuess2 === null) {
        document.stop();
    } else {
        window.alert(`Incorrect! You did not guess a number. You have ${remainingGuesses} guess remaining.`);
    } 
}


// Prompt user to guess a random number (3)
let userGuess3 = window.prompt(`${userName}, please guess one more random number between 1 and 50.`);
usedGuesses ++;
remainingGuesses = 3 - usedGuesses;
if (userGuess3 === null) {
    document.stop();
}

if (userGuess3 == randomNumber) {
    window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
    playAgain = window.confirm(`Want to play again, ${userName}?`);
        if (playAgain === true) {
            game();
        } else {
            document.stop();
        }
} else if (userGuess3 > randomNumber) {
    window.alert(`Incorrect! Your guess was too high. You have ${remainingGuesses} guesses remaining.`);
} else if (userGuess3 < randomNumber) {
    window.alert(`Incorrect! Your guess was too low. You have ${remainingGuesses} guesses remaining.`);
    playAgain = window.confirm(`Sorry, ${userName}, you did not guess the correct number. It was ${randomNumber}. Play again?`);
    if (playAgain === true) {
        game();
    } else {
        document.stop();
    }
} else {
    window.alert(`Hmmm... That doesn't look like a number. Go ahead and guess again. You have ${(remainingGuesses + 1)} guess remaining.`);
    userGuess3 = window.prompt(`${userName}, please guess a number between 1 and 50.`);
    if (userGuess3 == randomNumber) {
        window.alert(`CONGRATULATIONS! You've won the game by guessing the random number ${randomNumber}!`);
        playAgain = window.confirm(`Want to play again, ${userName}?`);
        if (playAgain === true) {
            game();
        } else {
            document.stop();
        }
    } else if (userGuess3 > randomNumber) {
        window.alert(`Incorrect! Your guess was too high. You have ${remainingGuesses} guesses remaining.`);
        playAgain = window.confirm(`Sorry, ${userName}, you did not guess the correct number. It was ${randomNumber}. Play again?`);
        if (playAgain === true) {
            game();
        } else {
            document.stop();
        }
    } else if (userGuess3 < randomNumber) {
        window.alert(`Incorrect! Your guess was too low. You have ${remainingGuesses} guesses remaining.`);
        playAgain = window.confirm(`Sorry, ${userName}, you did not guess the correct number. It was ${randomNumber}. Play again?`);
        if (playAgain === true) {
            game();
        } else {
            document.stop();
        }
    } else {
        window.alert(`Incorrect! You did not guess a number. You have ${remainingGuesses} guesses remaining.`);
        playAgain = window.confirm(`Sorry, ${userName}, you did not guess the correct number. It was ${randomNumber}. Play again?`);
        if (playAgain === true) {
            game();
        } else {
            document.stop();
        }
    }
}

}

game();
