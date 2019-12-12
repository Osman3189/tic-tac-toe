console.log("Tic Tac Toe");

let playerOne = "X";
let playerTwo = "O";

let turn = 1;
let move = 0;

//cursor
$('.gameBox').css('cursor','crosshair');

//hover
$('.box').on('mouseover', function(){
  $(this).css("background-color", "#ffc525");
});

$('.box').on('mouseout', function(){
  $(this).css("background-color", "#432cf0");
});

$('.box').off('click');


//Click Listen
$('.box').on('click', function(){
  $(this).off('click');
  // move ++;
  // if (event.target.innerHTML === "X") {
  //   return;
  // }

  if(turn === 1){
    // event.target.innerHTML = playerOne;
    $(this).html(playerOne);
    turn++;
  } else {
    event.target.innerHTML = playerTwo;
    turn--;
  }

  // check if this move caused a win
  // const box0 = document.getElementById('box0');
  // console.log( box0.innerHTML );

  // console.log(  $('#box0').html()  );

  if( $('#box0').html() === 'X' && $('#box1').html() === 'X' && $('#box2').html() === 'X' ||
   $('#box3').html() === 'X' && $('#box4').html() === 'X' && $('#box5').html() === 'X'  ||
   $('#box6').html() === 'X' && $('#box7').html() === 'X' && $('#box8').html() === 'X'  ||

   $('#box0').html() === 'X' && $('#box3').html() === 'X' && $('#box6').html() === 'X'  ||
   $('#box1').html() === 'X' && $('#box4').html() === 'X' && $('#box7').html() === 'X'  ||
   $('#box2').html() === 'X' && $('#box5').html() === 'X' && $('#box8').html() === 'X'  ||

   $('#box0').html() === 'X' && $('#box4').html() === 'X' && $('#box8').html() === 'X'  ||
   $('#box2').html() === 'X' && $('#box4').html() === 'X' && $('#box6').html() === 'X' ){

     $('#title').html('win for X!');

 }else if ($('#box0').html() === 'O' && $('#box1').html() === 'O' && $('#box2').html() === 'O' ||
  $('#box3').html() === 'O' && $('#box4').html() === 'O' && $('#box5').html() === 'O'  ||
  $('#box6').html() === 'O' && $('#box7').html() === 'O' && $('#box8').html() === 'O'  ||

  $('#box0').html() === 'O' && $('#box3').html() === 'O' && $('#box6').html() === 'O'  ||
  $('#box1').html() === 'O' && $('#box4').html() === 'O' && $('#box7').html() === 'O'  ||
  $('#box2').html() === 'O' && $('#box5').html() === 'O' && $('#box8').html() === 'O'  ||

  $('#box0').html() === 'O' && $('#box4').html() === 'O' && $('#box8').html() === 'O'  ||
  $('#box2').html() === 'O' && $('#box4').html() === 'O' && $('#box6').html() === 'O') {
    $('#title').html('win for O!');

  } else {

      if (if($(.box)===''||$('#title').html('win for O!')) {

      }
  }













  // else if ($('#box0').html() != 'X' && $('#box1').html() !== 'X' && $('#box2').html() !== 'X' ||
  //  $('#box3').html() !== 'X' && $('#box4').html() !== 'X' && $('#box5').html() !== 'X'  ||
  //  $('#box6').html() !== 'X' && $('#box7').html() !== 'X' && $('#box8').html() !== 'X'  ||
  //
  //  $('#box0').html() !== 'X' && $('#box3').html() !== 'X' && $('#box6').html() !== 'X'  ||
  //  $('#box1').html() !== 'X' && $('#box4').html() !== 'X' && $('#box7').html() !== 'X'  ||
  //  $('#box2').html() !== 'X' && $('#box5').html() !== 'X' && $('#box8').html() !== 'X'  ||
  //
  //  $('#box0').html() !== 'X' && $('#box4').html() !== 'X' && $('#box8').html() !== 'X'  ||
  //  $('#box2').html() !== 'X' && $('#box4').html() !== 'X' && $('#box6').html() !== 'X') {
  //    $('#title').html('its a draw!');
  // }
  // else if ($('#box0').html() != 'O' && $('#box1').html() !== 'O' && $('#box2').html() !== 'O' ||
  //  $('#box3').html() !== 'O' && $('#box4').html() !== 'O' && $('#box5').html() !== 'O'  ||
  //  $('#box6').html() !== 'O' && $('#box7').html() !== 'O' && $('#box8').html() !== 'O'  ||
  //
  //  $('#box0').html() !== 'O' && $('#box3').html() !== 'O' && $('#box6').html() !== 'O'  ||
  //  $('#box1').html() !== 'O' && $('#box4').html() !== 'O' && $('#box7').html() !== 'O'  ||
  //  $('#box2').html() !== 'O' && $('#box5').html() !== 'O' && $('#box8').html() !== 'O'  ||
  //
  //  $('#box0').html() !== 'O' && $('#box4').html() !== 'O' && $('#box8').html() !== 'O'  ||
  //  $('#box2').html() !== 'O' && $('#box4').html() !== 'O' && $('#box6').html() !== 'O') {
  //    $('#title').html('its a draw!');
  // };


  // }

// Steps to Draw

// If all the squares/Boxes are taken

// if there are no empty strings in the grid

// And there is no winner

// Then it must be a draw







});

//Win logic

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
