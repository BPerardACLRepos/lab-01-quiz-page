export function checkForCorrectAnswer(userAnswer, correctAnswer) {
    if (userAnswer.charAt(0).toUpperCase() === correctAnswer.charAt(0).toUpperCase()) {
        return true;
    } else {
        return false;
    }
}