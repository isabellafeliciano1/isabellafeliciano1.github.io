function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const messageElement = document.getElementById('message');

    messageElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}.`;

    // Determine the winner
    if (playerChoice === computerChoice) {
        messageElement.textContent += ' It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        messageElement.textContent += ' You win!';
    } else {
        messageElement.textContent += ' Computer wins!';
    }
}
