# lab-01-quiz-page

- Assign const to the button and answer HTML elements for JS to add interactivity to the page
  > Attempt to change styles on elements to ensure properly selected

- Initiate quiz with button at bottom of information
  > Test click handler with console.log

- Initiate let correctAnswerTracker for counting correct answers

- Prompt() user for their name and save answer to const for customized quiz results
  > Test by logging const values to console

- Confirm() that user is ready to take the quiz
  > Use if ( !confirmation ) to return and exit function if cancel
  > Test that function doesn't reach following console.log to check for proper cancel

- Make prompt() that receives answer from the user and accepts string and accepts any string starting with 'y' as Yes
  > Save answer to const and use charAt(0) to get first character, and toUpperCase() to make case insensitive
  > Console.log answer.charAt(0), and toUpperCase() to make sure function is working
  > Use if ( correctAnswer ) to check for right answer, and increase tracker
  > Console.log tracker to ensure only right answers cause it to increment

- Refactor question function to remove CountAsYes function and place in utils.js
  > Ensure function works by running tests
  > Import function to app.js and test refactored function still increments tracker properly

- Alert user when quiz is over and use .textContent to print grade to page
  > Ensure that proper outcome is printed to page

// STRETCH

- Style different results using CSS for 0/3, 1/3, 2/3, 3/3
  > Use if/else to select user category, and classList.add to select proper styles & text content

- Present percentage and remove decimal using Math.floor()
