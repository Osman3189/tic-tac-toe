#Tic Tac Toe

Developing this game can seem daunting, it is important to break it down into workable steps.

Steps to follow

1. There are two players X and O.
2. They both need to take turns making a move.
3. The game needs to register possible winning combinations.
4. If there are no winning combinations then it is a draw.


Start by creating two variables that defines Player One and Player Two.

Create another variable that keeps track of turns.

Attach an event listener to every square by targeting the Class Name '.Box'.

Create a conditional statement that looks all the potential winning combinations and if equal X or O then target the HTML title to highlight who won.

Create a else if statement that states if the turnCounter is === 9 and there are no winners then the HTML title should state that it is a draw.


Create a 2 click listeners
1. If player wants to reset the game he/she doesn't have refresh the page, by clicking New Game, the click listener should clear all the boxes.

2. After every box is clicked it should show X or O through event and targeting the HTML.
