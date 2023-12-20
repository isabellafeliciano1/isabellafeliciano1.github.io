// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 3; // Number of attempts allowed

function checkGuess() {
    const userGuessElement = document.getElementById('userGuess');
    const messageElement = document.getElementById('message');

    // Get the user's guess
    const userGuess = parseInt(userGuessElement.value);

    // Check if the guess is correct
    if (userGuess === secretNumber) {
        messageElement.textContent = 'Congratulations! You guessed the correct number!';
        messageElement.style.color = 'green';
        disableInputAndButton();
    } else {
        attempts--;
        if (attempts > 0) {
            // Provide a hint to the user
            messageElement.textContent = `Wrong guess. ${attempts} attempts remaining. Try again.`;
            messageElement.style.color = 'red';
        } else {
            // Game over if no attempts remaining
            messageElement.textContent = `Game over! The correct number was ${secretNumber}.`;
            messageElement.style.color = 'red';
            disableInputAndButton();
        }
    }
}

function disableInputAndButton() {
    const userGuessElement = document.getElementById('userGuess');
    const submitButton = document.querySelector('button');

    userGuessElement.disabled = true;
    submitButton.disabled = true;
}
