// Player objs
const Player = (name) => {
    return {name};
};

// Gameboard
const Gameboard = () => {
    const playingField = () => [
        [0,0,0], 
        [0,0,0], 
        [0,0,0]
    ];
    return {playingField};
};

// Render to webpage

// Functions to allow players to add marks to specific spots (if not already chosen)

// Function that determines a win

// Game control
const Play = (p1, p2) => {
    const player1 = Player(p1);
    const player2 = Player(p2);

    const board = Gameboard().playingField();
    return {player1, player2, board};
};


