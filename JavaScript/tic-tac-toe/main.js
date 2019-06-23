// Player objects
const Player = (name) => {
    return {name};
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
    console.log(board);

    // who's turn?
    let mark = "X";

    let cell = document.getElementById(boardPos);
    if (cell.innerHTML == ""){
        cell.innerHTML = mark;
    }
    let x = arrPos[0];
    let y = arrPos[1];
    board[x][y] = mark;   
};

// Function that determines a winner

// Game control
const Play = (p1, p2) => {
    const player1 = Player(p1);
    const player2 = Player(p2);
    const board = Gameboard().playingField();
    
    return {player1, player2, board};
};

const p1 = "Doug";
const p2 = "Bob";
const gameOn = Play(p1, p2);
render(gameOn.board);


