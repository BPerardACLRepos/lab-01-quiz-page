export function checkForCorrectAnswer(userAnswerString, correctAnswerString) {
    if (userAnswerString.charAt(0).toUpperCase() === correctAnswerString.charAt(0).toUpperCase()) {
        return true;
    } else {
        return false;
    }
}