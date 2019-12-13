console.log("Tic Tac Toe");

let playerOne = "X";
let playerTwo = "O";

let turn = 1;
let turnCounter = 0;

//cursor
$('.gameBox').css('cursor','crosshair');

//hover
$('.box').on('mouseover', function(){
  $(this).css("background-color", "#e72dee");
});

$('.box').on('mouseout', function(){
  $(this).css("background-color", "#10e4e5");
});


$('#reset').on('click', function(){
  $('.box').empty() && $('#title').html("Tic Tac Toe") && $('.insults').html("Lets go again");
});



//Click Listeners
$('.box').on('click', function(){

  if( $(this).html() !== '' ){
    return;  // leave function early
  }

  turnCounter++;


  if(turn === 1){
    // event.target.innerHTML = playerOne;
    $(this).html(playerOne);
    turn++;
  } else {
    // event.target.innerHTML = playerTwo;
    $(this).html(playerTwo);
    turn--;
  }

  //Win logic

  if( $('#box0').html()  && $('#box1').html() === 'X' && $('#box2').html() === 'X' ||
   $('#box3').html() === 'X' && $('#box4').html() === 'X' && $('#box5').html() === 'X'  ||
   $('#box6').html() === 'X' && $('#box7').html() === 'X' && $('#box8').html() === 'X'  ||

   $('#box0').html() === 'X' && $('#box3').html() === 'X' && $('#box6').html() === 'X'  ||
   $('#box1').html() === 'X' && $('#box4').html() === 'X' && $('#box7').html() === 'X'  ||
   $('#box2').html() === 'X' && $('#box5').html() === 'X' && $('#box8').html() === 'X'  ||

   $('#box0').html() === 'X' && $('#box4').html() === 'X' && $('#box8').html() === 'X'  ||
   $('#box2').html() === 'X' && $('#box4').html() === 'X' && $('#box6').html() === 'X' ){

     $('#title').html('X Wins!');

 }else if ($('#box0').html() === 'O' && $('#box1').html() === 'O' && $('#box2').html() === 'O' ||
  $('#box3').html() === 'O' && $('#box4').html() === 'O' && $('#box5').html() === 'O'  ||
  $('#box6').html() === 'O' && $('#box7').html() === 'O' && $('#box8').html() === 'O'  ||

  $('#box0').html() === 'O' && $('#box3').html() === 'O' && $('#box6').html() === 'O'  ||
  $('#box1').html() === 'O' && $('#box4').html() === 'O' && $('#box7').html() === 'O'  ||
  $('#box2').html() === 'O' && $('#box5').html() === 'O' && $('#box8').html() === 'O'  ||

  $('#box0').html() === 'O' && $('#box4').html() === 'O' && $('#box8').html() === 'O'  ||
  $('#box2').html() === 'O' && $('#box4').html() === 'O' && $('#box6').html() === 'O') {
    $('#title').html('O Wins!');

//draw logic
  } else if( turnCounter === 9 ){
    $('#title').html('Draw!');

  }


});// end of click handler




//Game Insults

let gameInsults = [
  'Is that all you got',
  'bring it on',
  'Stay back after class',
  'How should I beat you this time?',
  'Nice try',
  'Thats the best you can do?',
  'loool',
  'Do you know how to play?'
];


$('.box').on('click', function(){
  // turn++;
  let randomInsult = gameInsults[Math.floor(Math.random()*gameInsults.length)];
  // console.log( randomInsult );
  $('.insults').html(randomInsult)

});







// console.log( $('#box1') );
// $('#box0').trigger('click');
// $('#box1').trigger('click');
// $('#box2').trigger('click');
//
// $('#box3').trigger('click');
// $('#box4').trigger('click');
// $('#box8').trigger('click');
//
// $('#box5').trigger('click');
// $('#box6').trigger('click');
//
// $('#box7').trigger('click');


//Win logic
//
// Winning Combinations
//
//   Horizontal
//   0 1 2
//   3 4 5
//   6 7 8
//
//   Vertical
//   0 3 6
//   1 4 7
//   2 5 8
//
//   Diagonal
//   0 4 8
//   2 4 6
//
//   After every time someone makes a move
//   Check all winning combinations for a winner
//   e.g. Do box 0, box 1 and box 2 all contain "X"?
//         If they do, X wins
  // const boxes = document.getElementsByClassName("box");




// for (var i = 0; i < boxes.length; i++) {
//   console.log(boxes[i]);
// };

//
// const winningCombinations = [ box0 && box1 && box2 || box3 && box4 && box5 || box6 && box7 && box8 || box0 && box3 && box6 || box1 && box4 && box7 || box2 && box5 && box8 || box0 && box4 && box8 || box2 && box4 && box6 ]
