// Player objects
var Player = function (name, mark) {
    this.name = name;
    this.mark = mark;
    this.setScore = () => this.score = 0;
    this.addPoint = () => this.score += 1;
    this.getScore = () => this.score;
};

// Gameboard
const Gameboard = () => {
    this.playingField = () => [
        ["","",""], 
        ["","",""], 
        ["","",""]
    ];
    return {playingField};
};

// Render to webpage
const render = (board) => {
    let table = document.querySelector('table');
    let cellId = 1;
    for (var i = 0 ; i < board.length; i++){
        let row = table.insertRow();
        for (var j = 0; j < board[i].length; j++){
            let cell = row.insertCell();
            // Content position on the board
            cell.id = cellId; cellId++;
            // Data position in the array
            cell.setAttribute('data-row', i);
            cell.setAttribute('data-cell', j);
            cell.addEventListener('click', (e) => {
                // position in the board array
                let arrPos = [cell.getAttribute('data-row'), cell.getAttribute('data-cell')];
                let boardPos = cell.id;
                makeMark(e, arrPos, boardPos, board);
            });
            let text = document.createTextNode = board[i][j];
            cell.append(text);
            row.append(cell);
        }
    }
};


// reset the entire game
const resetGame = () => {

    gameOn.board = resetBoard(gameOn.board);
    gameOn.player1.setScore();
    gameOn.player2.setScore();

    let score1 = document.getElementById('player1_score');
    score1.innerText = 0;
    let score2 = document.getElementById('player2_score');
    score2.innerText = 0;

    clearBoard();
};

let resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetGame);

// resets the board array
const resetBoard = (board) => {
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board.length; j++) {
                board[i][j] = "";
            }
        }
    return board;
};

// find out if board is completely full / no moves / tie


// clear board on page and in array
const clearBoard = () => {

    let table = document.querySelector('table');
    let rows = table.rows;
    for (let i = 0; i < rows.length; i++){
        for (let j = 0; j < rows.length; j++){
            rows[i].cells[j].innerText = "";
        }
    }

    gameOn.board = resetBoard(gameOn.board);

     let display = document.getElementById('display_winner');
     display.style.display = 'none';
     let displayWinner = document.getElementById('winner');
     displayWinner.innerText = "";

};

let clearBoardBtn = document.getElementById('clear-board-btn');
clearBoardBtn.addEventListener('click', e => {
    clearBoard(e);
});

// Functions to allow players to add marks to specific spots (if not already chosen)
const makeMark = (e, arrPos, boardPos, board) => {
    e.preventDefault();
    
    let cell = document.getElementById(boardPos);
    if (cell.innerHTML == ""){
        cell.innerHTML = nextTurn;
        let x = arrPos[0];
        let y = arrPos[1];
        board[x][y] = nextTurn;
        lastTurn = nextTurn;
        takeTurn();
    }  
    checkWin(board, arrPos);
};

const displayWin = (mark) => {
    if (mark === "X"){
         let displayScore = document.getElementById('player1_score');
         gameOn.player1.addPoint();
         displayScore.innerText = gameOn.player1.getScore();

         let displayWinner = document.getElementById('winner');
         displayWinner.innerText = gameOn.player1.name + " won!";

         let display = document.getElementById('display_winner');
         display.style.display = 'block';
    } else {
         let displayScore = document.getElementById('player2_score');
         gameOn.player2.addPoint();
         displayScore.innerText = gameOn.player2.getScore();

         let displayWinner = document.getElementById('winner');
         displayWinner.innerText = gameOn.player2.name + " won!";

         let display = document.getElementById('display_winner');
         display.style.display = 'block';
    }
};

// Check win in board array / display on page 
const checkWin = (board, arrPos) => {
    let x = arrPos[0];
    let y = arrPos[1];
    if (board[x].every(x => x === "X")){
       displayWin("X");
    } else if (board[0][y] === "X" && board[1][y] === "X" && board[2][y] === "X") {
        displayWin("X");
    } else if (board[x].every(x => x === "O")){
        displayWin("O");
    } else if (board[0][y] === "O" && board[1][y] === "O" && board[2][y] === "O") {
       displayWin("O");
    } else if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
        displayWin("O");
    } else if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") {
        displayWin("O");
    } else if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
        displayWin("O");
    } else if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
        displayWin("X");
    }
};

// Game control
const Play = (p1, p2) => {
    const player1 = new Player(p1[0], p1[1]);
    const player2 = new Player(p2[0], p2[1]);
    const board = Gameboard().playingField();
    return {player1, player2, board, resetBoard};
};

const p1 = ["Annie", "X", 0];
const p2 = ["Bob", "O", 0];
const gameOn = Play(p1, p2);
gameOn.player1.setScore();
gameOn.player2.setScore();
render(gameOn.board);

//Take turn
let nextTurn = gameOn.player1.mark;
const takeTurn = () => {
    if (nextTurn === "O") {
        nextTurn = "X";
    } else {
        nextTurn = "O";
    }
};

let player1Name = document.getElementById('player1_name');
player1Name.innerText = gameOn.player1.name + ": ";
let player2Name = document.getElementById('player2_name');
player2Name.innerText = gameOn.player2.name + ": ";

