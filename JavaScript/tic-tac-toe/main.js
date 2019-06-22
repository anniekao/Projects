// Player objects
const Player = (name) => {
    return {name};
};

// Gameboard
const Gameboard = () => {
    let playingField = () => [
        [0,0,0], 
        [0,0,0], 
        [0,0,0]
    ];
    return {playingField};
};

// Render to webpage
const render = (board) => {
    let table = document.querySelector('table');
    for (var i = 0 ; i < board.length; i++){
        let row = table.insertRow();
        for (var j = 0; j < board[i].length; j++){
            let cell = row.insertCell()
            let text = document.createTextNode = board[i][j];
            cell.append(text);
            row.append(cell);
        }
    }
};

// Update board

// Functions to allow players to add marks to specific spots (if not already chosen)
const chooseSquare = (board) => {
    
}

// Function that determines a win

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


