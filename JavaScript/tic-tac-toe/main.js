// Player objects
const Player = (name, mark) => {
    return {name, mark};
};

// Gameboard
const Gameboard = () => {
    let playingField = () => [
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
            cell.addEventListener('click', e => {
                let rowId = cell.getAttribute('data-row');
                let cellId = cell.getAttribute('data-cell');
                let arrPos = [rowId, cellId];
                let boardPos = cell.id;
                makeMark(e, arrPos, boardPos, board);
            });
            let text = document.createTextNode = board[i][j];
            cell.append(text);
            row.append(cell);
        }
    }
};

// Reset board


// Functions to allow players to add marks to specific spots (if not already chosen)
const makeMark = (e, arrPos, boardPos, board) => {
    e.preventDefault();
 
    let cell = document.getElementById(boardPos);
    if (cell.innerHTML == ""){
        cell.innerHTML = nextTurn;
        let x = arrPos[0];
        let y = arrPos[1];
        board[x][y] = nextTurn; 
        takeTurn();
    }  
};

// Function that determines a winner

// Game control
const Play = (p1, p2) => {
    const player1 = Player(p1[0], p1[1]);
    const player2 = Player(p2[0], p2[1]);
    const board = Gameboard().playingField();
    return {player1, player2, board};
};

const p1 = ["Annie", "X"];
const p2 = ["Bob", "O"];
const gameOn = Play(p1, p2);
render(gameOn.board);

//Take turn
var nextTurn = gameOn.player1.mark;
const takeTurn = () => {
    if (nextTurn === "O") {
        nextTurn = "X";
    } else {
        nextTurn = "O";
    }
};