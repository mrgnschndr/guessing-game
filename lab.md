# Guessing Game Lab

In this lab, you will utilize the window and document models (accessed through their respective JavaScript keywords) to create a guessing game. A user will have THREE chances to guess the correct number. Draw upon your knowledge of if/else statements as well as truthy/falsy values to craft the logic around the game's outcome. You may NOT use loops for this lab.

## Repository Requirements

- Create a repository in GitHub called guessing-game
- Clone down the repository to your local machine
- Create and move to a new branch that adheres to the following naming convention as much as possible:
-- build-game (for development)
-- fix-game (for drafting debug fixes)
- Commit early and commit often. Commits will be checked! Remember to move back to your MAIN branch after each fresh commit. Ensure your remote repository files are made available on your local machine (`git pull origin main`)
- Connect the repository to a new GitHub page.
- Send the link for review when complete.


## Game Requirements

1. Research the `Math.random()` method to learn how to generate a random number. The number should be between 1-50.
2. Give a user a prompt to guess the random number. NOTE: You will need to keep track of the number of guesses a user has used.
3. Use if/else and truthy/falsy concepts to evaluate whether or not the user's guess was correct.
4. NOTE: If a user's guess is incorrect, respond with a prompt letting them know whether or not their guess was too high or too low and how many chances remain.
5. If a user guesses within three chances, display an alert letting the user know they've won and what the number was.
6. If a user loses, display an alert letting the user know they have lost and reveal the number.

## Stretch Goals
- Add a window.prompt that asks for the user's name before the game begins. Include the name dynamically in the feedback alerts. Remember to validate the name.
- Return an error message if the user does NOT enter a guess that is a number. Do NOT count that guess as a valid attempt. Let the user know how many guesses remain.
- Provide a user with the option to restart the game WITHOUT using a loop. This is tricky! Only do this step if you are absolutely finished with all the other requirements and want to push yourself.