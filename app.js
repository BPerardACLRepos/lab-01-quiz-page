

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
    console.log('yollo')
})