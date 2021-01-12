

const quizStartButton = document.querySelector('#quiz-button');
const userAnswerDiv = document.querySelector('#user-results');

quizStartButton.addEventListener('click', () => {
    let correctAnswers = 0;
    const firstName = prompt(`What's your first name?`);
    const lastName = prompt(`What's your last name?`);

    const userConfirm = confirm('Are you ready for this?');
    if (!userConfirm) {
        return;
    }

    // Will positive reinforcement make your team one of the best ever? N
    // If someone brings a bat to kickball, should you question their intent? Y
    // Will viral videos be the height of kickball glory? Y

    const userAnswerOne = prompt('Will positive reinforcement make your team one of the best ever?');
    if (userAnswerOne.charAt(0).toUpperCase() === 'Y') {
        correctAnswers++;
    }
    console.log(correctAnswers);

})