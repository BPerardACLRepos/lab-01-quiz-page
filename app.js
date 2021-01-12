import { checkForCorrectAnswer } from './utils.js'

const quizStartButton = document.querySelector('#quiz-button');
const userAnswerDiv = document.querySelector('#user-results');

quizStartButton.addEventListener('click', () => {
    let correctAnswers = 0;
    const totalAnswers = 3;

    const firstName = prompt(`What's your first name?`);
    const lastName = prompt(`What's your last name?`);

    const userConfirm = confirm('Are you ready for this?');
    if (!userConfirm) {
        return;
    }

    const userAnswerOne = prompt('Will positive reinforcement make your team one of the best ever?');
    if (checkForCorrectAnswer(userAnswerOne, 'No')) {
        correctAnswers++;
    }

    const userAnswerTwo = prompt('If someone brings a bat to kickball, should you question their intent?');
    if (checkForCorrectAnswer(userAnswerTwo, 'Yes')) {
        correctAnswers++;
    }

    const userAnswerThree = prompt('Will viral videos be the greatest height of kickball glory?');
    if (checkForCorrectAnswer(userAnswerThree, 'Yes')) {
        correctAnswers++;
    }

    alert(`The quiz may be over ${firstName} ${lastName}, but the fun will never stop.`);

    const percentCorrect = Math.floor(correctAnswers / totalAnswers * 100);

    userAnswerDiv.textContent = `You got ${correctAnswers} out of ${totalAnswers} correct (${percentCorrect}%).`
})