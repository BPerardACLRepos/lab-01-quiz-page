import { checkForCorrectAnswer } from './utils.js';

const quizStartButton = document.querySelector('#quiz-button');
const userAnswerDiv = document.querySelector('#user-results');
const userSuccessStory = document.querySelector('#user-success-story');

quizStartButton.addEventListener('click', () => {
    let correctAnswers = 0;
    const totalAnswers = 3;

    const firstName = prompt(`What's your first name?`);
    const lastName = prompt(`What's your last name?`);

    const userConfirm = confirm('Are you ready for this?');
    if (!userConfirm) {
        return;
    }

    const userAnswerOne = prompt('Will positive reinforcement make your team one of the best ever? (Y/N)');
    if (checkForCorrectAnswer(userAnswerOne, 'No')) {
        correctAnswers++;
    }

    const userAnswerTwo = prompt('If someone brings a bat to kickball, should you question their intent? (Y/N)');
    if (checkForCorrectAnswer(userAnswerTwo, 'Yes')) {
        correctAnswers++;
    }

    const userAnswerThree = prompt('Will viral videos be the greatest height of kickball glory? (Y/N)');
    if (checkForCorrectAnswer(userAnswerThree, 'Yes')) {
        correctAnswers++;
    }

    alert(`The quiz may be over ${firstName} ${lastName}, but the fun will never stop.`);

    const percentCorrect = Math.floor(correctAnswers / totalAnswers * 100);

    userAnswerDiv.textContent = `You got ${correctAnswers} out of ${totalAnswers} correct (${percentCorrect}%).`;

    if (correctAnswers === 0) {
        console.log('yollo');
        userSuccessStory.textContent = `It may be time to start brushing up on those Cup Stacking skills`;
    } else if (correctAnswers === 1) {
        userSuccessStory.textContent = `You know that saying about the cup being half full? Well, they weren't talking about you`;
    } else if (correctAnswers === 2) {
        userSuccessStory.textContent = `Two steps forward and one step back is a thing they say, right?`;
    } else if (correctAnswers === 3) {
        userSuccessStory.textContent = `You've got the right stuff!`;
    }
});
