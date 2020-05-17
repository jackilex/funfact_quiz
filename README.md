# funfact_quiz
Scope:
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

Plan:
For this assignment i will use HTML and CSS to set up the USER interface, and JAVAScript to send outputs and Recieve inputs

HTML:
HTMl was use to create the interface using containers or boxes. Inside each container i add added appropriate classes and an HTMl content to label their functions or the intent of their existence. 


CSS:
With CSS i use flexbox in order to place everything in the right place per UI Design.


JAVAscript:
For my Javascript i decided to use function calling and page number to decide what question should be call next. The click events chain or timer will decide when the exam is over.
During the quiz taking, the user will recieve feedbak; if question is correct the user get 2 points and receive good feedback message.
However if the user answer the questions wrong they will lose 10 secods of their clock.
1) I  Created target locations variables to manipulate for output, input.
2) I set up a time interval for my for my timer. It will be set at 75s.
3) I set up my scoreboard, the user gets 2 points or none - the scoreboard was set using a functon that adds 2 points to the score board and showing the result using inner html.
4) i set a page variable, this page gets 1 added to at the end of each button is pressed. This page variable dictates if the next page function can be run or not.
5) i set up an object with 2 methods. one for wrong answers and the other for correct answers. (each will add 1 to the page number which will allow the next page to run).
6) The questions: each question are set up as a function, if they are 'true' they will run
7) i set up my click events for each button. Each buttons are set up to call one of the object methods (created earlier)
8) Last step is to create a local storage, where the name and score will be save and called back.
