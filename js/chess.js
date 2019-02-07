
  /**
  * IIFE to create the View object in MVC
  * @return {Object} object with public methods
  */
const chessView = (function(){

  //HTML symbols for chess peices
  const blackRook   = "&#9820;";
  const blackKnight = "&#9822;";
  const blackBishop = "&#9821;";
  const blackQueen  = "&#9819;";
  const blackKing   = "&#9818;";
  const blackPawn   = "&#9823;";

  const whitePawn   = "&#9817;";
  const whiteRook   = "&#9814;";
  const whiteKnight = "&#9816;";
  const whiteBishop = "&#9815;";
  const whiteQueen  = "&#9813;";
  const whiteKing   = "&#9812;";

  var lastClicked = null;
  var control;

  /**
  * listener for div elements that make up chess board
  * @param {Event} evt
  */
  function onClick(evt){

    //HTML symbols for chess peices
    var id = evt.target.id;
    if (id === "board"){ return;}  // if is top elem div and not square
    if (lastClicked === null){
      lastClicked = evt.target;
      lastClicked.classList.add("selected");
    } else {
      lastClicked.classList.toggle("selected");
      control.movePiece(lastClicked.id, id);
      update();
      lastClicked = null;
    }
  }

  /**
  * Sets control variable, appends divs to #board and calls update
  * @param {Object} obj Control object in MVC
  */
  function init(obj){

    control = obj;
    var board = document.querySelector("#board");
    board.innerHTML = "";
    board.addEventListener("click",onClick,false); // during bubbling phase
    var color = "white";
    var col = 97;
    var row = 8;

    for (var i=1; i < 65; i++){
      var div = document.createElement("div")
      div.classList.add(color);
      div.id = String.fromCharCode(col) + row;
      if (col === 104){
        col = 97;
        row -= 1;
      } else {
        col += 1;
      }
      board.appendChild(div);
      color = (color === "white") ? "black" : "white";
      if (i % 8 === 0){
        color = (color === "white") ? "black" : "white";}
    }
    update();
  }

  /*
  * Gets board from Control object and sets innerHTML of divs representing squares
  */
  function update(){

    var squares = document.querySelectorAll("#board div");
    var rep = control.getBoard();
    var sqr = 0
    for (var i=0;i<rep.length;i+=2){
      if (rep[i] !== "-"){
        switch(rep.substring(i,i+2)) { // **********
          case "00": squares[sqr].innerHTML = ""; break;
          case "bp": squares[sqr].innerHTML = blackPawn; break;
          case "br": squares[sqr].innerHTML = blackRook; break;
          case "bn": squares[sqr].innerHTML = blackKnight; break;
          case "bb": squares[sqr].innerHTML = blackBishop; break;
          case "bq": squares[sqr].innerHTML = blackQueen; break;
          case "bk": squares[sqr].innerHTML = blackKing; break;

          case "wp": squares[sqr].innerHTML = whitePawn; break;
          case "wr": squares[sqr].innerHTML = whiteRook; break;
          case "wn": squares[sqr].innerHTML = whiteKnight; break;
          case "wb": squares[sqr].innerHTML = whiteBishop; break;
          case "wq": squares[sqr].innerHTML = whiteQueen; break;
          case "wk": squares[sqr].innerHTML = whiteKing; break;
        }
        sqr += 1
      }
    }
  }

  return { // *****Public Methods*****
    update : update,
    init : init
  }
}());
/**
* IIFE to create the Control object in MVC
* @return {Object} object with public methods
*/
const chessControl = (function(){
  
}());
