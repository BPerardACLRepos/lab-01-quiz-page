import { checkForCorrectAnswer } from '../utils.js';

const test = QUnit.test;

test('function should return true if first character of argument strings match, else false', (expect) => {
    const expected = true;

    const actual = checkForCorrectAnswer('tasty', 'toads');

    expect.equal(actual, expected);
});

test('function should return true if first character of argument strings match, else false', (expect) => {
    const expected = false;

    const actual = checkForCorrectAnswer('gross', 'toads');

    expect.equal(actual, expected);
});